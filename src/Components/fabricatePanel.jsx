import Purchasable from "./controls/purchasable/purchasable";
import {fabObjects} from "../GameData/FabObjects";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIncomePerSecond, getIncomeSources, getResources, getSourceCurrentIncomes} from "../Redux/selectors";
import {addIncomeSource} from "../Redux/actions";
import FabricatePricingFunction from "../Util/FabricatePricingFunction";
import FormatInt from "../Util/FormatInt";


export default function FabricatePanel() {
  const dispatch = useDispatch();
  const sources = useSelector(getIncomeSources);
  const incomePerSecond = useSelector(getIncomePerSecond);
  const currentIncomeSources = useSelector(getSourceCurrentIncomes);
  const resources = useSelector(getResources)

  const mapObject = Object.entries(fabObjects).map(([key, value]) => ({...value, key}))

  return (
    <Grid container spacing={1} style={{marginTop: '10px'}}>
      {mapObject.map((details, index) => {
          if (index === 0 || sources[mapObject[index - 1].key] > 0) {
            return (
              <Grid item xs={12} key={`fabrication_option_${details.key}`}>
                <Purchasable
                  title={details.title}
                  subtitle={details.subtitle}
                  altText={`${FormatInt((currentIncomeSources[details.key] / sources[details.key]) || details.baseIncome)}/s - ${(currentIncomeSources[details.key] / incomePerSecond * 100 || 0).toFixed(1)}% of total`}
                  owned={sources[details.key]}
                  price={FabricatePricingFunction(details, sources[details.key])}
                  disabled={resources < FabricatePricingFunction(details, sources[details.key])}
                  onPurchase={() => {
                    // dispatch(decreaseResources(FabricatePricingFunction(details, sources[details.key])))
                    dispatch(addIncomeSource(details.key, sources[details.key], FabricatePricingFunction(details, sources[details.key])));
                  }}
                />
              </Grid>
            )
          } else {
            return null;
          }
        }
      )}
    </Grid>
  )
}