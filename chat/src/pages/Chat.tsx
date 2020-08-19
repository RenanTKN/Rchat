import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RegisterModal from "../components/RegisterModal";
import { useSelector, useDispatch } from "react-redux";
import { getUsername } from "../redux/selectors";
import { sendMessage, loggedIn } from "../redux/actions";
import signal from "../services/signalR";
import { receiveMessageType, loggedInType } from "../types";
import AppBar from "../components/AppBarMenu";
import ChatContainer from "../components/ChatContainer";
import DialogConnection from "../components/DialogConnection";

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
});

const Chat = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(true);
  const [reconnecting, setReconnecting] = useState<boolean>(false);
  const username = useSelector((state) => getUsername(state));

  useEffect(() => {
    signal.connect();

    signal.connection?.onreconnecting((error) => {
      setReconnecting(true);
      console.log(`Connection lost due to error "${error}". Reconnecting.`);
    });

    signal.connection?.onreconnected((connectionId) => {
      setReconnecting(false);
      console.log(
        `Connection reestablished. Connected with connectionId "${connectionId}".`
      );
    });

    signal.connection?.on("sendToAll", (message: receiveMessageType) => {
      dispatch(sendMessage(message));
    });
    signal.connection?.on("newUserConnected", (logged: loggedInType) => {
      dispatch(loggedIn(logged));
    });
  }, [dispatch]);

  useEffect(() => {
    if (username.length) {
      signal.login(username);
    }
  }, [username]);

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.container}>
        <AppBar />
        <ChatContainer />
      </div>

      <RegisterModal open={open} handleClose={handleClose} />
      <DialogConnection open={reconnecting} />
    </>
  );
};

export default Chat;
