import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIncomePerSecond, getIncomeSources, getResearched} from "../Redux/selectors";
import {INCREASE_RESOURCES} from "../Redux/actionTypes";
import {useShallowEqualSelector} from "../Hooks/useShallowEqualSelector";
import {addMessage} from "../Redux/actions";
import {fabObjects} from "../GameData/FabObjects";
import {ResearchObjects} from "../GameData/ResearchObjects";
import useInterval from "../Hooks/useInterval";

/**
 * Controls the timing of the game, ticks once every 25th of a second
 */
export default function GameManager(){
  const dispatch = useDispatch();
  const incomePerSecond = useSelector(getIncomePerSecond);
  const sources = useSelector(getIncomeSources);
  const upgrades = useShallowEqualSelector(getResearched);

  // initial values
  const prevUpgrades = useRef([...upgrades]);
  const prevSources = useRef({...sources});

  // Game global tick rate
  useInterval(({time, delta}) => {
    dispatch({type: INCREASE_RESOURCES, payload: incomePerSecond*delta});
  }, 0.04)


  // Generator purchase message trigger
  useEffect(() => {
    // figure out which one had 0 but now has 1
    for (const [key, value] of Object.entries(sources)) {
      if(value === 1 && prevSources.current[key] === 0 && fabObjects[key].message){
        dispatch(addMessage(fabObjects[key].message))
      }
    }
    // copy values into ref
    for (const key of Object.keys(sources)) {
      prevSources.current[key] = sources[key]
    }
  }, [sources])


  // Upgrade purchase message trigger
  useEffect(() => {
    const research = ResearchObjects.find(x => x.id === upgrades[upgrades.length-1]);
    if(research && research.message){
      // check to make sure we haven't already sent that message
      if(prevUpgrades.current.length > 0 && !prevUpgrades.current[prevUpgrades.current.length -1] === research.id){
        dispatch(addMessage(research.message));
        prevUpgrades.current = [...prevUpgrades, research.id];
      }
    }
  }, [upgrades])


  console.log("game manager render sanity check")
  return(
    <></>
  )
}