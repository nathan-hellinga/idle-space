import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIncomePerSecond, getIncomeSources, getResearched} from "../Redux/selectors";
import {INCREASE_RESOURCES} from "../Redux/actionTypes";
import {useShallowEqualSelector} from "../Hooks/useShallowEqualSelector";
import {addMessage} from "../Redux/actions";
import {fabObjects} from "../GameData/FabObjects";
import {ResearchObjects} from "../GameData/ResearchObjects";

/**
 * Controls the timing of the game, ticks once every 25th of a second
 */
export default function GameManager(){
  const dispatch = useDispatch();
  const incomePerSecond = useSelector(getIncomePerSecond);
  const sources = useSelector(getIncomeSources);
  const prevSources = useRef(Object.keys(fabObjects).reduce((a, r) => {
    a[r] = 0;
    return a;
  }, {}))
  const upgrades = useShallowEqualSelector(getResearched);

  // Game global tick rate
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({type: INCREASE_RESOURCES, payload: incomePerSecond/25});
    }, 40);
    return () => clearInterval(interval);
  })

  // when we buy the first fab item, send that message to the queue
  useEffect(() => {
    // figure out which one had 0 but now has 1
    for (const [key, value] of Object.entries(sources)) {
      if(value === 1 && prevSources.current[key] === 0){
        dispatch(addMessage(fabObjects[key].message))
      }
    }

    // copy values into ref
    for (const key of Object.keys(sources)) {
      prevSources.current[key] = sources[key]
    }
  }, [sources])

  // when we buy an upgrade, send that message to the queue
  useEffect(() => {
    const research = ResearchObjects.find(x => x.id === upgrades[upgrades.length-1]);
    if(research){
      dispatch(addMessage(research.message))
    }
  }, [upgrades])


  console.log("game manager render sanity check")
  return(
    <></>
  )
}