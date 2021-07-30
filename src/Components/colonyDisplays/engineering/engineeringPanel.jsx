import React from 'react';
import {Grid} from "@material-ui/core";
import Purchasable from "../../controls/purchasable/purchasable";
import {colonyUpgrades} from "../../../GameData/colonyUpgrades";
import {useShallowEqualSelector} from "../../../Hooks/useShallowEqualSelector";
import {getColonyResources} from "../../../Redux/selectors";
import {useDispatch} from "react-redux";
import {decreaseColonyResources, ResearchColony} from "../../../Redux/actions";

export default function EngineeringPanel() {
  const dispatch = useDispatch();
  const colonyResources = useShallowEqualSelector(getColonyResources);
  const colonyResearch = useShallowEqualSelector(state => state.colony.research);
  const colonyBuildings = useShallowEqualSelector(state => state.colony.buildings);


  const checkResources = (price) => {
    for (const [key, value] of Object.entries(price)) {
      if (!colonyResources[key] || colonyResources[key] < value) return false;
    }
    return true;
  }

  const purchase = (details) => {
    dispatch(ResearchColony(details.key));
    dispatch(decreaseColonyResources(details.price));
  }

  const mapObject = Object.entries(colonyUpgrades)
    .map(([key, value]) => ({...value, key}))
    .filter(x => !colonyResearch.some(y => y === x.key))
  return (
    <Grid container spacing={1} style={{marginTop: '10px'}}>
      {mapObject.map((details, index) => {
          if(colonyBuildings[details.building] < 1) return null;
          for (const dependency of details.dependencies) {
            if(!colonyResearch.includes(dependency)) return null;
          }

          return (
            <Grid item xs={12} key={`engineering_option_${details.key}`}>
              <Purchasable
                title={details.title}
                subtitle={details.subtitle}
                altText={Object.entries(details.price).map(([key, value]) => `${value} ${key}`).join(", ")}
                // owned={buildings[details.key]}
                price={Object.entries(details.price).map(([key, value]) => `${value} ${key}`).join(", ")}
                disabled={!checkResources(details.price)}
                onPurchase={() => purchase(details)}
              />
            </Grid>
          )
        }
      )}
    </Grid>
  );
}
