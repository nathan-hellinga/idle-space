import React from 'react';
import classes from "./assignments.module.css";
import {Button, Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {addColonist, increaseColonyResources} from "../../../Redux/actions";

function Sacrifice() {
  const dispatch = useDispatch();
  const population = useSelector(state => state.colony.population);

  const sacrifice = () => {
    dispatch(addColonist(-1));
    dispatch(increaseColonyResources({blood: 1}));
  }

  return (
    <div className={classes.controlWrapper}>
      <Grid container>
        <Grid item xs={8} className={classes.titles}>
          <h2>Sacrifice Colonist</h2>
          <p style={{fontStyle: 'italic', color: '#d01c1c', fontFamily: "Cabin Sketch"}}>A God demands blood</p>
        </Grid>
        <Grid item xs={4}>
          <Button
            color={'secondary'}
            onClick={sacrifice}
            disabled={population <= 2}
            fullWidth
            variant={'outlined'}
          >
            Sacrifice
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Sacrifice;


