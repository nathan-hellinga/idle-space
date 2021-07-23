import React from 'react';
import PropTypes from 'prop-types';
import classes from "./modal.module.css";
import {Button, Grid} from "@material-ui/core";

Modal.propTypes = {
  open: PropTypes.bool,
  actions: PropTypes.array,
};

function Modal({open, actions, children}) {
  if(!open) return null;



  return (
    <div className={classes.backdrop}>
      <div className={classes.wrapper}>
        {children}
        <Grid container spacing={2} className={classes.actions}>
          {
            actions && actions.length > 0 &&
            actions.map((action, index) => (
              <Grid item key={`${action.label}_button`}>
                <Button
                  onClick={action.onClick}
                  variant={'outlined'}
                  color={action.color}
                  disabled={action.disabled}
                >{action.label}</Button>
              </Grid>
            ))
          }
        </Grid>
      </div>

    </div>
  );
}

export default Modal;