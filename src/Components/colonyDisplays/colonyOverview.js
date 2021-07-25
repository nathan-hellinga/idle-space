import React from 'react';
import {useSelector} from "react-redux";

function ColonyOverview() {
  const population = useSelector(state => state.colony.population);
  const resources = useSelector(state => state.resources.colonyResources);



  return (
    <div style={{paddingTop: '20px'}}>
      <h1 style={{margin: 0, float: "left"}}>Mars Colony</h1>
      <h2 style={{marginTop: '-10px', marginBottom: 0, opacity: 0.5, textAlign: 'right'}}>{resources} - Resources</h2>
      <h2 style={{marginTop: '-10px', marginBottom: 0, opacity: 0.5, textAlign: 'right'}}>{population} - Population</h2>
    </div>
  );
}

export default ColonyOverview;