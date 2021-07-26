import React, {useState} from 'react';
import {Button, Divider, Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import classes from "./launchPanel.module.css";
import Modal from "../modal/modal";
import useKeepPercent from "../../../Hooks/useKeepPercent";

function LaunchPanel() {
  const dispatch = useDispatch();
  const launchFacilityCount = useSelector((state) => state.sources.launchFacility)
  const currentPrestige = useSelector(state => state.game.prestige);
  const keepPercent = useKeepPercent();
  const prestige = useSelector(state => state.game.prestige);

  const [launchConfirmation, setLaunchConfirmation] = useState(false);
  const launchConfirmActions = [
    {
      label: 'cancel',
      color: 'secondary',
      onClick: () => setLaunchConfirmation(false)
    },
    {
      label: "yes I'm ready",
      onClick: () => {
        dispatch(prestige(currentPrestige, keepPercent));
        setLaunchConfirmation(false);
      }
    }
  ]

  const roundToAppropriate = num => {
    if(num > 1){
      return num.toFixed(3);
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
        <h2 className={classes.launchText}>RETURN TO {prestige === 0 ? "EARTH" : "MARS"}</h2>
        <span className={classes.subtext}>You will keep {roundToAppropriate(keepPercent * 100)}% of resources</span>
        <Button
          fullWidth
          variant={'outlined'}
          color={'secondary'}
          onClick={ () => setLaunchConfirmation(true)}
        >Launch</Button>
      </Grid>
      <Divider style={{backgroundColor: '#dbdbdb', margin: '10px 0'}}/>
      <Modal
        open={launchConfirmation}
        actions={launchConfirmActions}
      >
        <div>
          <h1>
            Are you sure you are ready to launch?
          </h1>
          <p>
            Building more <span style={{color: 'var(--color-primary)'}}>Orbital Launch Platforms</span> and
            <span style={{color: 'var(--color-primary)'}}>Space Elevators</span> will increase the amount of resources you will
            get to bring with you. Only leave when you are sure you are ready.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default LaunchPanel;