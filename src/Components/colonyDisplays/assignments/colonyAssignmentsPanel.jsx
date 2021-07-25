import React from 'react';
import {useShallowEqualSelector} from "../../../Hooks/useShallowEqualSelector";
import AssignmentControl from "./assignmentControl";
import {getColonyResourcesPerSecond} from "../../../Redux/selectors";
import {colonyObjects} from "../../../GameData/colonyObjects";

function ColonyAssignmentsPanel() {
  const assignments = useShallowEqualSelector(state => state.colony.assignments);
  const colonyIncomes = useShallowEqualSelector(getColonyResourcesPerSecond);


  return (
    <div>
      {Object.entries(assignments).map(([key, value]) => {
        const details = colonyObjects[key];
        if(!details) return null;


        return(
            <AssignmentControl name={key} assigned={value} subtitle={`${colonyIncomes[details.output]} /second`}/>
          )
      })}
    </div>
  );
}

export default ColonyAssignmentsPanel;