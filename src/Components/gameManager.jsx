import {useDispatch, useSelector} from "react-redux";
import {getColonyResources, getColonyResourcesPerSecond, getIncomePerSecond} from "../Redux/selectors";
import {INCREASE_RESOURCES, RESET} from "../Redux/actionTypes";
import useInterval from "../Hooks/useInterval";
import usePaused from "../Hooks/usePaused";
import MeetColonyDialogPopup from "./story/firstPrestige/meetColonyDialogPopup";
import {
  addColonist,
  addMessage,
  assignColonist,
  decreaseColonyResources,
  increaseColonyResources
} from "../Redux/actions";
import {useShallowEqualSelector} from "../Hooks/useShallowEqualSelector";
import {useState} from "react";

/**
 * Controls the timing of the game, ticks once every 25th of a second
 */
export default function GameManager() {
  const dispatch = useDispatch();
  const incomePerSecond = useSelector(getIncomePerSecond);
  const colonyIncomes = useShallowEqualSelector(getColonyResourcesPerSecond);
  const population = useSelector(state => state.colony.population);
  const colonyResources = useShallowEqualSelector(getColonyResources);
  const building = useShallowEqualSelector(state => state.colony.buildings);
  const paused = usePaused();

  const [goneHungry, setGoneHungry] = useState(0);


  // Game global tick rate
  useInterval(({time, delta}) => {
    if (!paused) {
      dispatch({type: INCREASE_RESOURCES, payload: incomePerSecond * delta});
      let payload = Object.entries(colonyIncomes).reduce((a, [key, value]) => {
        a[key] = value * delta;
        return a;
      }, {});
      dispatch(increaseColonyResources(payload))
    }
  }, 40)

  // colony upkeep and events
  useInterval(({time, delta}) => {
    if (!paused) {
      console.log("COLONY UPKEEP");
      let foodRequired = population * (delta / 60);
      let wellFed = false;
      if (((colonyResources.food ?? 0) + (colonyResources.biomass ?? 0)) > foodRequired * 4) {
        foodRequired *= 2;
        wellFed = true;
      }
      const takenFromFood = Math.min(foodRequired, colonyResources.food ?? 0);
      const takenFromBiomass = foodRequired - takenFromFood;
      const hungry = takenFromBiomass > (colonyResources.biomass ?? 0);

      dispatch(decreaseColonyResources({
        biomass: takenFromBiomass,
        food: takenFromFood / 2,  // food is more nutritious than biomass so it takes half as much food to feed ppl
      }));

      let event = false;

      //events
      if (hungry) {
        if (goneHungry >= 3) {
          dispatch(addMessage("A colonist has starved to death.", 3));
          dispatch(assignColonist(-1));
        } else if (goneHungry === 2) {
          dispatch(addMessage("We are starving, if we don't get food soon we will surely die.", 3))
        } else if (goneHungry === 1) {
          dispatch(addMessage("People are rationing and going without food, it's getting pretty bad down here.", 3))
        } else {
          dispatch(addMessage("We are running dangerously low on food, if we dont get more soon we will need to start rationing...", 3))
        }
        setGoneHungry(prev => prev + 1);
        event = true;
      } else if (wellFed && (Math.random() > 0.92)) {
        // new colonist
        dispatch(addMessage("A new colonist has been born!", 3))
        dispatch(addColonist(1));
      }

      // trigger a sickness or accident
      if (building?.medic && !event && (Math.random() > 0.95)) {
        event = true;
        const severity = Math.ceil(Math.random() * 4);
        let message = "";
        switch (severity) {
          case 1: {
            message = "A colonist has come down with a fever... ";
            break;
          }
          case 2: {
            message = "Two colonists got into a fight and have injured one another... ";
            break;
          }
          case 3:{
            message = "While working on the air recyclers a colonist got their arm stuck in the machine and emergency vented the room the others were working in... ";
            break;
          }
          case 4:{
            message = "A disease has spread through some of the colonists... ";
            break;
          }
          default:{
            message = "A got sick... ";
            break;
          }
        }
        if(colonyResources?.meds >= severity){
          message += "With proper medical treatment and some bed rest they ended up alright.";
        }else{
          message += "Unfortunately we did not have enough medicine to save them.";
          dispatch(addColonist(-severity));  // kill some colonists
        }
        dispatch(addMessage(message, 3))
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