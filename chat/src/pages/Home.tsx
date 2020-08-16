import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AboutModal from "../components/AboutModal";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  card: {
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  buttonsContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-around",
  },
});

const Home = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" align="center">
              Rchat
            </Typography>
            <Typography color="textSecondary">Connecting people...</Typography>
          </CardContent>
          <CardActions>
            <div className={classes.buttonsContainer}>
              <Link to="/chat">
                <Button size="small" variant="contained" color="primary">
                  Start
                </Button>
              </Link>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => {
                  setOpen(true);
                }}
              >
                About
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
      <AboutModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Home;
