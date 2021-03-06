import {Button, ButtonGroup, Divider, Grid} from "@material-ui/core";
import classes from "./main.module.css";
import {useDispatch} from "react-redux";
import ResourceDisplay from "../../Components/resourceDisplay/resourceDisplay";
import PlanetDisplay from "../../Components/planetDisplay/planetDisplay";
import {useState} from "react";
import FabricatePanel from "../../Components/fabricatePanel";
import {increaseResources} from "../../Redux/actions";
import ResearchPanel from "../../Components/researchPanel";
import CommunicationsPanel from "../../Components/communications/communicationsPanel";
import LaunchPanel from "../../Components/controls/LaunchButton/launchPanel";


export default function Main(){
  const dispatch = useDispatch();

  const [openTab, setOpenTab] = useState('fabricate');


  return(
    <Grid container spacing={2} style={{height: '100vh'}} alignItems={'stretch'} justify={'center'}>
      <Grid item xs={12} sm={6} md={4} className={classes.sidePanel} style={{overflow: 'hidden', display: "flex", flexDirection: 'column'}}>
          <ResourceDisplay/>
          <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
          <PlanetDisplay/>
          <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
          <Button
            variant={'outlined'}
            fullWidth
            onClick={() => dispatch(increaseResources(1))}
          >Mine resources</Button>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <LaunchPanel/>
        <div className={classes.comsWrapper}>
          <CommunicationsPanel/>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.sidePanel}>
        <ButtonGroup fullWidth>
          <Button
            variant={openTab === 'fabricate' ? "contained" : "outlined"}
            onClick={() => setOpenTab('fabricate')}
          >Fabricate</Button>
          <Button
            variant={openTab === 'research' ? "contained" : "outlined"}
            onClick={() => setOpenTab('research')}
          >Research</Button>
        </ButtonGroup>
        {openTab === 'fabricate' ? <FabricatePanel /> : <ResearchPanel />}
      </Grid>
    </Grid>
  )
}