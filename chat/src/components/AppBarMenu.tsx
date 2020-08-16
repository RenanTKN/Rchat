import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getUsername } from "../redux/selectors";

const useStyles = makeStyles({
  userInfo: {
    marginLeft: 10,
  },
});

const AppBarMenu = () => {
  const classes = useStyles();
  const username = useSelector((state) => getUsername(state));

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          RChat
          {username.length > 0 && (
            <span className={classes.userInfo}>| {username}</span>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMenu;
