import React, { useState, useRef } from "react";
import SendIcon from "@material-ui/icons/Send";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import { getUsername } from "../redux/selectors";
import signal from "../services/signalR";

const FormMessage = () => {
  const username = useSelector((state) => getUsername(state));
  const [message, setMessage] = useState<string>("");
  const messageRef = useRef<HTMLDivElement>(null);

  const sendMessage = (): void => {
    message.length && signal.send("SendToAll", { username, message });
    setMessage("");
  };

  const submitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendMessage();

    messageRef.current && messageRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={submitMessage}>
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <TextField
              id="outlined-basic"
              placeholder="Type a message..."
              variant="outlined"
              size="small"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus
              inputRef={messageRef}
              inputProps={{ maxLength: 1000 }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              fullWidth
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormMessage;
