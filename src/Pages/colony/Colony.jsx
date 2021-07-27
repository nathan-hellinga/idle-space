import React, {useState} from 'react';
import {Button, ButtonGroup, Divider, Grid} from "@material-ui/core";
import CommunicationsPanel from "../../Components/communications/communicationsPanel";
import classes from "./colony.module.css";
import ColonyOverview from "../../Components/colonyDisplays/colonyOverview";
import ColonyResources from "../../Components/colonyDisplays/colonyResources";
import ColonyBuildingsPanel from "../../Components/colonyDisplays/colonyBuildingsPanel";
import ColonyAssignmentsPanel from "../../Components/colonyDisplays/assignments/colonyAssignmentsPanel";
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";
import Research from "../../Components/colonyDisplays/research";

function Colony() {
  const [openTab, setOpenTab] = useState('building');
  const colonyBuildings = useShallowEqualSelector(state => state.colony.buildings);


  return (
    <Grid container spacing={2} className={classes.wrapper}>
      <Grid item md={4} className={classes.sidePanel}>
        <CommunicationsPanel/>
      </Grid>
      <Grid item md={4}>
        <ColonyOverview/>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <ColonyResources />
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <ColonyAssignmentsPanel />
      </Grid>
      <Grid item md={4}>
        {/*<h1 style={{margin: 0}}>Buildings</h1>*/}
        {/*<Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>*/}
        <ButtonGroup fullWidth>
          <Button
            variant={openTab === 'building' ? "contained" : "outlined"}
            onClick={() => setOpenTab('building')}
          >Building</Button>
          <Button
            variant={openTab === 'research' ? "contained" : "outlined"}
            onClick={() => setOpenTab('research')}
            disabled={!colonyBuildings?.engineer}
          >Engineering</Button>
        </ButtonGroup>
        {
          openTab === 'building' ?
            <ColonyBuildingsPanel/>
            :
            <Research/>
        }

      </Grid>
    </Grid>
  );
}

export default Colony;