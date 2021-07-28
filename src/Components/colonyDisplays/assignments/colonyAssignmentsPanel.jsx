import React from 'react';
import {useShallowEqualSelector} from "../../../Hooks/useShallowEqualSelector";
import AssignmentControl from "./assignmentControl";
import {colonyObjects} from "../../../GameData/colonyObjects";
import Sacrifice from "./sacrifice";

function ColonyAssignmentsPanel() {
  const assignments = useShallowEqualSelector(state => state.colony.assignments);
  const buildings = useShallowEqualSelector(state => state.colony.buildings);


  const generateSubtitle = (details, count) => {
    let s = [];
    for (const input of details.inputs) {
      s.push(`-${input.numerator * count} ${input.name} /${input.denominator}s`)
    }
    for (const output of details.outputs) {
      s.push(`+${output.numerator * count} ${output.name} /${output.denominator}s`)
    }
    return s.join(", ")
  }

  return (
    <div>
      {Object.entries(assignments).map(([key, value]) => {
        const details = colonyObjects[key];
        if(!details) return null;
        return(
          <AssignmentControl key={`assignments_${key}`} name={key} assigned={value} subtitle={generateSubtitle(details, value)}/>
        )
      })}
      {
        buildings.sacrifice &&
        <Sacrifice/>
      }
    </div>
  );
}

export default ColonyAssignmentsPanel;