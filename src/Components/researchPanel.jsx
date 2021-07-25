import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIncomeSources, getResearched, getResources} from "../Redux/selectors";
import {ResearchObjects} from "../GameData/ResearchObjects";
import CheckResearchUnlockable from "../Util/CheckResearchUnlockable";
import Purchasable from "./controls/purchasable/purchasable";
import {buyUpgrade} from "../Redux/actions";


export default function ResearchPanel(){
  const dispatch = useDispatch();
  const resources = useSelector(getResources)
  const researched = useSelector(getResearched);
  const sources = useSelector(getIncomeSources);
  const prestige = useSelector(state => state.game.prestige)


  const generateAltText = (multi) => {
    if(multi >= 2){
      return `${multi}x multiplier`
    }else{
      // multi must be between 1 - 2
      multi -= 1;
      multi *= 100;
      return `${multi.toFixed(0)}% increase`
    }
  }

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
                altText={generateAltText(item.multiplier)}
                onPurchase={() => {
                  dispatch(buyUpgrade(item.id, item.basePrice, prestige));
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