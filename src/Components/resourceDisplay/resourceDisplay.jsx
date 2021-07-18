import {useSelector} from "react-redux";
import {getIncomePerSecond, getResources} from "../../Redux/selectors";
import {Divider} from "@material-ui/core";
import FormatInt from "../../Util/FormatInt";


export default function ResourceDisplay(){
  const resources = useSelector(getResources);
  const incomePerSecond = useSelector(getIncomePerSecond);


  return(
    <div>
      <h1 style={{textAlign: 'right', marginBottom: 0}}>{FormatInt(resources)}</h1>
      <h2 style={{marginTop: '-10px', marginBottom: 0, opacity: 0.5, float: 'left'}}>Resources</h2>
      <h2 style={{marginTop: '-10px', marginBottom: 0, opacity: 0.5, float: 'right'}}>{incomePerSecond}/s</h2>
      <div style={{clear: "both"}}/>
    </div>
  )
}