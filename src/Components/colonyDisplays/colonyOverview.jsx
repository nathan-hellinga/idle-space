import React from 'react';
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";

function ColonyOverview() {
  const resources = useShallowEqualSelector(state => state.resources.colonyResources);

  return (
    <div style={{paddingTop: '20px', display: "flex", justifyContent: 'space-between', alignItems: 'baseline'}}>
      <h1 style={{margin: 0}}>Mars Colony</h1>
      <h3 style={{margin: 0, opacity: 0.5}}>{resources} - Orbital Resources</h3>
    </div>
  );
}

export default ColonyOverview;