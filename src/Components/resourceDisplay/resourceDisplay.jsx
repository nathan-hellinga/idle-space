import {useSelector} from "react-redux";
import {getIncomePerSecond, getResources} from "../Redux/selectors";
import {Divider} from "@material-ui/core";


export default function ResourceDisplay(){
  const resources = useSelector(getResources);
  const incomePerSecond = useSelector(getIncomePerSecond);


  return(
    <div>
      <h1 style={{textAlign: 'right', marginBottom: 0}}>{resources.toFixed().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}</h1>
      <h3 style={{marginTop: '-10px', marginBottom: 0, opacity: 0.5, float: 'left'}}>Resources</h3>
      <h3 style={{marginTop: '-10px', marginBottom: 0, opacity: 0.5, float: 'right'}}>{incomePerSecond}/s</h3>
      <Divider style={{clear: 'both', backgroundColor: '#e8e8e8', margin: '5px 0'}}/>
    </div>
  )
}