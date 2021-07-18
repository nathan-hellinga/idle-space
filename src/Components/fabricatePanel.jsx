import Purchasable from "./controls/purchasable/purchasable";
import {fabObjects} from "../GameData/FabObjects";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIncomePerSecond, getIncomeSources, getResources, getSourceCurrentIncomes} from "../Redux/selectors";
import {addIncomeSource, decreaseResources} from "../Redux/actions";
import FabricatePricingFunction from "../Util/FabricatePricingFunction";


export default function FabricatePanel(){
  const dispatch = useDispatch();
  const sources = useSelector(getIncomeSources);
  const incomePerSecond = useSelector(getIncomePerSecond);
  const currentIncomeSources = useSelector(getSourceCurrentIncomes);
  const resources = useSelector(getResources)

  return(
    <Grid container spacing={1} style={{marginTop: '10px'}}>
      {Object.entries(fabObjects).map(([key, details]) => (
        <Grid item xs={12}>
          <Purchasable
            title={details.title}
            subtitle={details.subtitle}
            altText={`${currentIncomeSources[key]}/s - ${(currentIncomeSources[key]/incomePerSecond*100 || 0).toFixed(1)}% of total`}
            owned={sources[key]}
            price={FabricatePricingFunction(details.basePrice, sources[key])}
            disabled={resources < FabricatePricingFunction(details.basePrice, sources[key])}
            onPurchase={() => {
              dispatch(decreaseResources(FabricatePricingFunction(details.basePrice, sources[key])))
              dispatch(addIncomeSource(key));
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}