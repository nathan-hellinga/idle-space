import {useDispatch, useSelector} from "react-redux";
import {getIncomePerSecond} from "../Redux/selectors";
import {INCREASE_RESOURCES, RESET} from "../Redux/actionTypes";
import useInterval from "../Hooks/useInterval";
import usePaused from "../Hooks/usePaused";
import MeetColonyDialogPopup from "./story/firstPrestige/meetColonyDialogPopup";

/**
 * Controls the timing of the game, ticks once every 25th of a second
 */
export default function GameManager() {
  const dispatch = useDispatch();
  const incomePerSecond = useSelector(getIncomePerSecond);
  const paused = usePaused();


  // Game global tick rate
  useInterval(({time, delta}) => {
    if (!paused) {
      dispatch({type: INCREASE_RESOURCES, payload: incomePerSecond * delta});
    }
  }, 0.04)


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