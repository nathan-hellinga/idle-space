import React from 'react';
import {useDispatch} from "react-redux";
import {colonyObjects} from "../../GameData/colonyObjects";
import {Grid} from "@material-ui/core";
import Purchasable from "../controls/purchasable/purchasable";
import FabricatePricingFunction from "../../Util/FabricatePricingFunction";
import {addBuilding} from "../../Redux/actions";
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";

function ColonyBuildingsPanel() {
  const dispatch = useDispatch();

  const buildings = useShallowEqualSelector(state => state.colony.buildings);
  const resources = useShallowEqualSelector(state => state.resources.colonyResources)



  const mapObject = Object.entries(colonyObjects).map(([key, value]) => ({...value, key}))

  return (
    <Grid container spacing={1} style={{marginTop: '10px'}}>
      {mapObject.map((details, index) => {
        console.log(details);
          if (index === 0 || buildings[mapObject[index - 1].key] > 0) {
            return (
              <Grid item xs={12} key={`buildings_option_${details.key}`}>
                <Purchasable
                  title={details.title}
                  subtitle={details.subtitle}
                  altText={`${details.outputRate} ${details.output} /worker /second`}
                  owned={buildings[details.key]}
                  price={FabricatePricingFunction(details, buildings[details.key] ?? 0)}
                  disabled={resources < FabricatePricingFunction(details, buildings[details.key])}
                  onPurchase={() => {
                    dispatch(addBuilding(details.key, buildings[details.key], FabricatePricingFunction(details, buildings[details.key] ?? 0)));
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
  );
}

export default ColonyBuildingsPanel;