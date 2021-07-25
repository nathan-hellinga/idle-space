import React from 'react';
import {useSelector} from "react-redux";
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";
import {getColonistAssignments} from "../../Redux/selectors";

function ColonyOverview() {
  const population = useSelector(state => state.colony.population);
  const resources = useShallowEqualSelector(state => state.resources.colonyResources);
  const assignments = useShallowEqualSelector(getColonistAssignments);


  const totalAssigned = () => {
    return Object.values(assignments).reduce((a, r) => a += r, 0)
  }

  return (
    <div style={{paddingTop: '20px'}}>
      <h1 style={{margin: 0, float: "left"}}>Mars Colony</h1>
      <h2 style={{marginTop: 0, marginBottom: 0, opacity: 0.5, textAlign: 'right'}}>{resources} - Building Materials</h2>
      <h2 style={{marginTop: 0, marginBottom: 0, opacity: 0.5, textAlign: 'right'}}>{population} ({population - totalAssigned()}) - Population</h2>
    </div>
  );
}

export default ColonyOverview;