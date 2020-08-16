import React from "react";
import { useSelector } from "react-redux";
import { getMessages } from "../redux/selectors";
import FormMessage from "../components/FormMessage";
import { makeStyles } from "@material-ui/core/styles";
import { getUsername } from "../redux/selectors";

const useStyles = makeStyles({
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  chat: {
    paddingBottom: 50,
  },
  cardContainer: {
    width: "100%",
    display: "flex",
  },
  card: {
    width: "50%",
    margin: 3,
    padding: 5,
    paddingBottom: 10,
    backgroundColor: "#fff",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: 4,
  },
  cardName: {
    display: "block",
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardMessage: {
    display: "block",
    wordBreak: "break-all",
  },
  cardDate: {
    display: "block",
    color: "#BBB",
    float: "right",
    fontSize: 13,
  },
  cardInfo: {
    display: "flex",
    color: "#BBB",
    justifyContent: "center",
    margin: 10,
  },
  sendText: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
  },
});

const ChatContainer = () => {
  const classes = useStyles();
  const username = useSelector((state) => getUsername(state));
  const messages = useSelector((state) => getMessages(state));

  const formatDate = (date: string): string => {
    const datetime = new Date(date);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const leadingZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

    const day = leadingZero(datetime.getDate());
    const month = monthNames[datetime.getMonth()];
    const year = datetime.getFullYear();
    const hour = leadingZero(datetime.getHours());
    const minute = leadingZero(datetime.getMinutes());

    return `${hour}:${minute} - ${day} ${month} ${year}`;
  };

  return (
    <div className={classes.chatContainer}>
      <div className={classes.chat}>
        {messages.map((msg: any, index) => {
          switch (msg.type) {
            case "message":
              return (
                <div
                  className={classes.cardContainer}
                  style={
                    msg.username === username
                      ? {
                          justifyContent: "flex-end",
                        }
                      : {}
                  }
                  key={index}
                >
                  <div className={classes.card}>
                    <span className={classes.cardName}>{msg.username}</span>
                    <span className={classes.cardMessage}>{msg.message}</span>
                    <span className={classes.cardDate}>
                      {formatDate(msg.datetime)}
                    </span>
                  </div>
                </div>
              );
            case "loggedIn":
              return (
                <span className={classes.cardInfo} key={index}>
                  {`${msg.username} has logged in`}
                </span>
              );
            default:
              return null;
          }
        })}
      </div>
      <div className={classes.sendText}>
        <FormMessage />
      </div>
    </div>
  );
};

export default ChatContainer;
