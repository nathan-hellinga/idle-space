import React from 'react';
import {useSelector} from "react-redux";
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";
import {getColonistAssignments} from "../../Redux/selectors";

function ColonyAssignmentsHeader(props) {
  const population = useSelector(state => state.colony.population);
  const assignments = useShallowEqualSelector(getColonistAssignments);

  const totalAssigned = () => {
    return Object.values(assignments).reduce((a, r) => a += r, 0)
  }


  return (
    <div style={{paddingTop: '20px', display: "flex", justifyContent: 'space-between', alignItems: 'baseline'}}>
      <h1 style={{margin: 0}}>Assignments</h1>
      <h3 style={{marginTop: 0, marginBottom: 0, opacity: 0.5}}>{population} ({population - totalAssigned()}) - Population</h3>
    </div>
  );
}

export default ColonyAssignmentsHeader;