import React, { useState, FormEvent } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { setUsername } from "../redux/actions";
import { useDispatch } from "react-redux";

const RegisterModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): React.ReactElement => {
  const [currentUsername, setCurrentUsername] = useState<string>("");
  const dispatch = useDispatch();

  const submitRegister = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(setUsername(currentUsername.substring(0, 20)));
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Register</DialogTitle>
      <form onSubmit={submitRegister}>
        <DialogContent>
          <DialogContentText>
            To access the chat, please enter your username here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            value={currentUsername}
            onChange={(e) => {
              setCurrentUsername(e.target.value);
            }}
            fullWidth
            required
            inputProps={{ maxLength: 20 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              window.location.href = "/";
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Register
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default RegisterModal;
