import React from 'react';
import {Button, Chip, Divider, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import keepPercent from "../../../Util/KeepPercent";

function LaunchPanel() {
  const elevatorCount = useSelector((state) => state.sources.spaceElevator)
  const launchFacilityCount = useSelector((state) => state.sources.launchFacility)

  const roundToAppropriate = num => {
    if(num > 1){
      return num.toFixed(2);
    }else if(num > 0.0999){
      return num.toFixed(3);
    }else if(num > 0.0099){
      return num.toFixed(4);
    }else{
      return num.toFixed(5);
    }
  }

  if(launchFacilityCount === 0) return null;
  return (
    <div>
      <Grid item xs={12} style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
        <h2 style={{margin: '0 0 10px 0'}}>RETURN TO EARTH</h2><Chip label={`${roundToAppropriate(keepPercent(launchFacilityCount, elevatorCount) * 100)}%`}/>
        <Button fullWidth variant={'outlined'} color={'secondary'}>Launch</Button>
      </Grid>
      <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
    </div>
  );
}

export default LaunchPanel;