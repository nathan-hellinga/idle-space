import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIncomeSources, getResearched, getResources} from "../Redux/selectors";
import {ResearchObjects} from "../GameData/ResearchObjects";
import CheckResearchUnlockable from "../Util/CheckResearchUnlockable";
import Purchasable from "./controls/purchasable/purchasable";
import {buyUpgrade, decreaseResources} from "../Redux/actions";


export default function ResearchPanel(){
  const dispatch = useDispatch();
  const resources = useSelector(getResources)
  const researched = useSelector(getResearched);
  const sources = useSelector(getIncomeSources);

  return(
    <Grid container spacing={1} style={{marginTop: '10px'}}>
      {ResearchObjects.map(item => {
        if(CheckResearchUnlockable(item.id, researched, sources)){
          return(
            <Grid item xs={12} key={`research_option_${item.id}`}>
              <Purchasable
                title={item.title}
                subtitle={item.subtitle}
                price={item.basePrice}
                disabled={resources < item.basePrice}
                onPurchase={() => {
                  dispatch(decreaseResources(item.basePrice))
                  dispatch(buyUpgrade(item.id));
                }}
              />
            </Grid>
          )
        }else{
          return null;
        }
      })}
    </Grid>
    )
}