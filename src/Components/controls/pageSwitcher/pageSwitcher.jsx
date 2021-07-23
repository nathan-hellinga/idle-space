import React from 'react';
import classes from "./pageSwitcher.module.css";
import {Button, ButtonGroup} from "@material-ui/core";
import {useLocation, useHistory} from "react-router-dom";

function PageSwitcher(props) {
  const location = useLocation();
  const history = useHistory();

  console.log(location.pathname);
  return (
    <div className={classes.wrapper}>
      <ButtonGroup fullWidth>
        <Button
          variant={location.pathname === "/" ? "contained" :"outlined"}
          onClick={() => history.push('/')}
        >System</Button>
        <Button
          variant={location.pathname === "/colony" ? "contained" :"outlined"}
          onClick={() => history.push('/colony')}
        >Colony</Button>
      </ButtonGroup>
    </div>
  );
}

export default PageSwitcher;