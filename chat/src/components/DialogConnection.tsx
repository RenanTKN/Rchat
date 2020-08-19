import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CircularProgress from "@material-ui/core/CircularProgress";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles({
  dialogAlign: {
    display: "flex",
    alignItems: "center",
  },
  dialogText: {
    margin: 10,
  },
});

const DialogConnection = ({ open = false }: { open: boolean }) => {
  const classes = useStyles();

  return (
    <Dialog aria-labelledby="connection-dialog-title" open={open}>
      <DialogTitle id="connection-dialog-title">
        <div className={classes.dialogAlign}>
          <WarningIcon />
          <span className={classes.dialogText}>Connection lost</span>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText component="div">
          <div className={classes.dialogAlign}>
            <CircularProgress />
            <span className={classes.dialogText}>Reconnecting...</span>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default DialogConnection;
