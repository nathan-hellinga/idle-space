import {useSelector} from "react-redux";

export default function usePaused(){
  let paused = useSelector(state => state.game.paused);
  return paused;
}