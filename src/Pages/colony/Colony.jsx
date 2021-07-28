import React, {useState} from 'react';
import {Button, ButtonGroup, Divider, Grid, Tooltip} from "@material-ui/core";
import CommunicationsPanel from "../../Components/communications/communicationsPanel";
import classes from "./colony.module.css";
import ColonyOverview from "../../Components/colonyDisplays/colonyOverview";
import ColonyResources from "../../Components/colonyDisplays/colonyResources";
import ColonyBuildingsPanel from "../../Components/colonyDisplays/colonyBuildingsPanel";
import ColonyAssignmentsPanel from "../../Components/colonyDisplays/assignments/colonyAssignmentsPanel";
import {useShallowEqualSelector} from "../../Hooks/useShallowEqualSelector";
import Research from "../../Components/colonyDisplays/research";
import ColonyAssignmentsHeader from "../../Components/colonyDisplays/colonyAssignmentsHeader";

function Colony() {
  const [openTab, setOpenTab] = useState('building');
  const colonyBuildings = useShallowEqualSelector(state => state.colony.buildings);


  return (
    <Grid container spacing={2} className={classes.wrapper}>
      <Grid item md={4} className={classes.sidePanel}>
        <ColonyOverview/>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <ColonyResources/>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <div className={classes.comsWrapper}>
          <CommunicationsPanel/>
        </div>
      </Grid>
      <Grid item md={4}>
        <ColonyAssignmentsHeader/>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <ColonyAssignmentsPanel/>
      </Grid>
      <Grid item md={4}>
        {/*<h1 style={{margin: 0}}>Buildings</h1>*/}
        {/*<Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>*/}
        <ButtonGroup fullWidth>
          <Button
            variant={openTab === 'building' ? "contained" : "outlined"}
            onClick={() => setOpenTab('building')}
          >Building</Button>
          <Tooltip
            title={"Unlocked after constructing 'Engineers Workshop'"}
            arrow
            placement={'top'}
            disableHoverListener={Boolean(colonyBuildings?.engineer)}
            disableTouchListener={Boolean(colonyBuildings?.engineer)}
            disableFocusListener={Boolean(colonyBuildings?.engineer)}
          >
            <Button
              variant={openTab === 'research' ? "contained" : "outlined"}
              onClick={() => setOpenTab('research')}
              disabled={!colonyBuildings?.engineer}
            >Engineering</Button>
          </Tooltip>
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