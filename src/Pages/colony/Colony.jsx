import React from 'react';
import {Divider, Grid} from "@material-ui/core";
import CommunicationsPanel from "../../Components/communications/communicationsPanel";
import classes from "./colony.module.css";
import ColonyOverview from "../../Components/colonyDisplays/colonyOverview";
import ColonyResources from "../../Components/colonyDisplays/colonyResources";
import ColonyBuildingsPanel from "../../Components/colonyDisplays/colonyBuildingsPanel";

function Colony() {
  return (
    <Grid container spacing={2} className={classes.wrapper}>
      <Grid item md={4}>
        {/*<h1>Communications</h1>*/}
        {/*<Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>*/}
        <CommunicationsPanel/>
      </Grid>
      <Grid item md={4}>
        <ColonyOverview/>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <ColonyResources />
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>

      </Grid>
      <Grid item md={4}>
        <h1 style={{margin: 0}}>Buildings</h1>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <ColonyBuildingsPanel/>
      </Grid>
    </Grid>
  );
}

export default Colony;