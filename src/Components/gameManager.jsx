/**
 * Controls the timing of the game, ticks once every 25th of a second
 */
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIncomePerSecond} from "../Redux/selectors";
import {INCREASE_RESOURCES} from "../Redux/actionTypes";

export default function GameManager(){
  const dispatch = useDispatch();
  const incomePerSecond = useSelector(getIncomePerSecond);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({type: INCREASE_RESOURCES, payload: incomePerSecond/25});
    }, 40);
    return () => clearInterval(interval);
  })

  return(
    <></>
  )
}