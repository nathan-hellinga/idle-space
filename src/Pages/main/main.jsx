import {Button, ButtonGroup, Divider, Grid} from "@material-ui/core";
import classes from "./main.module.css";
import {useDispatch} from "react-redux";
import {INCREASE_RESOURCES} from "../../Redux/actionTypes";
import ResourceDisplay from "../../Components/resourceDisplay/resourceDisplay";
import PlanetDisplay from "../../Components/planetDisplay/planetDisplay";
import {useState} from "react";
import FabricatePanel from "../../Components/fabricatePanel";
import {increaseResources} from "../../Redux/actions";


export default function Main(){
  const dispatch = useDispatch();

  const [openTab, setOpenTab] = useState('fabricate');


  return(
    <Grid container spacing={2}>
      <Grid item xs={4} sm={3} className={classes.sidePanel}>
        <ResourceDisplay/>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <PlanetDisplay/>
        <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
        <Button
          variant={'outlined'}
          fullWidth
          onClick={() => dispatch(increaseResources(100))}
        >MINE</Button>
      </Grid>
      <Grid item xs={4} sm={6}>
      </Grid>
      <Grid item xs={4} sm={3} className={classes.sidePanel}>
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
        <FabricatePanel />
      </Grid>
    </Grid>
  )
}