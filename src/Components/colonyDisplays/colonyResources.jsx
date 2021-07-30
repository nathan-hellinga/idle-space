import React from 'react';
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";
import {getColonyResources} from "../../Redux/selectors";

function ColonyResources() {
  let resources = useShallowEqualSelector(getColonyResources);



  return (
    <div>
      <table style={{width: '100%', textAlign: 'left'}}>
        <thead>
        <tr><th>Resource</th><th>amount</th></tr>
        </thead>
        <tbody>
        {Object.entries(resources).map(([key, value]) => {
          if(key === 'population') return null;
          return(
            <tr key={`colony_resources_${key}`}><td>{key}</td><td>{value}</td></tr>
          )
        })}
        </tbody>
      </table>

    </div>
  );
}

export default ColonyResources;