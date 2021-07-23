import {useSelector} from "react-redux";

export default function (){
  let paused = useSelector(state => state.game.paused);
  return paused;
}