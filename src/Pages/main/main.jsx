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


export default function Main(){
  const dispatch = useDispatch();

  const [openTab, setOpenTab] = useState('fabricate');


  return(
    <Grid container spacing={2} style={{height: '100vh'}} alignItems={'stretch'}>
      <Grid item xs={12} sm={4} md={3} className={classes.sidePanel}>
          <ResourceDisplay/>
          <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
          <PlanetDisplay/>
          <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
          <Button
            variant={'outlined'}
            fullWidth
            onClick={() => dispatch(increaseResources(100))}
          >Mine resources</Button>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <CommunicationsPanel />
      </Grid>
      <Grid item xs={12} sm={4} md={6}>
        <div style={{height: '200px', width: '100%'}}/>
      </Grid>
      <Grid item xs={12} sm={4} md={3} className={classes.sidePanel}>
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