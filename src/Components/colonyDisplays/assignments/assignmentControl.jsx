import React from 'react';
import classes from "./assignments.module.css";
import PropTypes from 'prop-types';
import {Grid, IconButton} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {useDispatch} from "react-redux";
import {assignColonist, unAssignColonist} from "../../../Redux/actions";

AssignmentControl.propTypes = {
  name: PropTypes.string.isRequired,
  assigned: PropTypes.number,
  subtitle: PropTypes.string
};

function AssignmentControl({name, assigned, subtitle}) {
  const dispatch = useDispatch();


  return (
    <div className={classes.controlWrapper}>
      <Grid container>
        <Grid item xs={8} className={classes.titles}>
          <h2>{name}</h2>
          <p>{subtitle}</p>
        </Grid>
        <Grid item xs={4} className={classes.controls}>
          <div className={classes.assignedCount}>
            <h1>{assigned ?? 0}</h1>
          </div>
          <div className={classes.up}>
            <IconButton size={'small'} onClick={() => dispatch(assignColonist(name))}>
              <KeyboardArrowUpIcon/>
            </IconButton>
          </div>
          <div className={classes.down}>
            <IconButton size={'small'} onClick={() => dispatch(unAssignColonist(name))}>
              <KeyboardArrowDownIcon/>
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AssignmentControl;


