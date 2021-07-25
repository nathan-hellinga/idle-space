import {useDispatch, useSelector} from "react-redux";
import {getColonyResources, getColonyResourcesPerSecond, getIncomePerSecond} from "../Redux/selectors";
import {INCREASE_RESOURCES, RESET} from "../Redux/actionTypes";
import useInterval from "../Hooks/useInterval";
import usePaused from "../Hooks/usePaused";
import MeetColonyDialogPopup from "./story/firstPrestige/meetColonyDialogPopup";
import {addMessage, decreaseColonyResources, increaseColonyResources} from "../Redux/actions";
import {useShallowEqualSelector} from "../Hooks/useShallowEqualSelector";

/**
 * Controls the timing of the game, ticks once every 25th of a second
 */
export default function GameManager() {
  const dispatch = useDispatch();
  const incomePerSecond = useSelector(getIncomePerSecond);
  const colonyIncomes = useShallowEqualSelector(getColonyResourcesPerSecond);
  const population = useSelector(state => state.colony.population);
  const colonyResources = useShallowEqualSelector(getColonyResources)
  const paused = usePaused();


  // Game global tick rate
  useInterval(({time, delta}) => {
    if (!paused) {
      dispatch({type: INCREASE_RESOURCES, payload: incomePerSecond * delta});
      let payload = Object.entries(colonyIncomes).reduce((a, [key, value]) => {
        a[key] = value*delta;
        return a;
      }, {});
      dispatch(increaseColonyResources(payload))
    }
  }, 40)

  // colony upkeep and events
  useInterval(({time, delta}) => {
    if(!paused){
      console.log("COLONY UPKEEP");
      let foodRequired = population * (delta / 60);
      let wellFed = false;
      if((colonyResources.food ?? 0 + colonyResources.biomass ?? 0) > foodRequired * 4){
        foodRequired *= 2;
        wellFed = true;
      }
      const takenFromFood = Math.min(foodRequired, colonyResources.food ?? 0);
      const takenFromBiomass = foodRequired - takenFromFood;
      const hungry = takenFromBiomass > (colonyResources.biomass ?? 0);

      dispatch(decreaseColonyResources({
        biomass: takenFromBiomass,
        food: takenFromFood
      }));


      //events
      if(hungry){
        dispatch(addMessage("We are starving, if we don't get food soon we will surely die", 3))
      }else if(wellFed){
        dispatch(addMessage("We have an excess of food, people are happy and have their bellies full", 3))
      }

      if(wellFed && Math.random() > 0.9){
        // todo add colonist
        dispatch(addMessage("When people don't have to worry about food they get up to other things, a new colonist has been born!", 3))
      }


    }
  }, 60000)


  // define some global functions for the console;
  window.resetGame = () => {
    dispatch({type: RESET})
  }
  window.addResources = (amount) => {
    dispatch({type: INCREASE_RESOURCES, payload: amount})
  }
  console.log("game manager render sanity check")
  return (
    <>
      <MeetColonyDialogPopup/>
    </>
  )
}