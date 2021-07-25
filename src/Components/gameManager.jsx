import {useDispatch, useSelector} from "react-redux";
import {getColonyResourcesPerSecond, getIncomePerSecond} from "../Redux/selectors";
import {INCREASE_RESOURCES, RESET} from "../Redux/actionTypes";
import useInterval from "../Hooks/useInterval";
import usePaused from "../Hooks/usePaused";
import MeetColonyDialogPopup from "./story/firstPrestige/meetColonyDialogPopup";
import {increaseColonyResources} from "../Redux/actions";
import {useShallowEqualSelector} from "../Hooks/useShallowEqualSelector";

/**
 * Controls the timing of the game, ticks once every 25th of a second
 */
export default function GameManager() {
  const dispatch = useDispatch();
  const incomePerSecond = useSelector(getIncomePerSecond);
  const colonyIncomes = useShallowEqualSelector(getColonyResourcesPerSecond);
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