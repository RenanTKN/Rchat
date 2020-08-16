import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles({
  chip: {
    margin: 1,
  },
});

const AboutModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement => {
  const classes = useStyles();
  const techs = [
    { name: "React", url: "https://reactjs.org/" },
    {
      name: "SignalR",
      url: "https://dotnet.microsoft.com/apps/aspnet/signalr",
    },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Material-UI", url: "https://material-ui.com/" },
    { name: "React Router", url: "https://reactrouter.com/" },
    { name: "Redux", url: "https://redux.js.org/" },
  ];
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">About</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>RChat v1.0 - This is a chat project that uses:</p>
          {techs.map((tech) => (
            <Chip
              key={tech.name}
              label={tech.name}
              color="primary"
              clickable
              component="a"
              href={tech.url}
              target="_blank"
              className={classes.chip}
              deleteIcon={<DoneIcon />}
              onDelete={(): void => {}}
            />
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutModal;
