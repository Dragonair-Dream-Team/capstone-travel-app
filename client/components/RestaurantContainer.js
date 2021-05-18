import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  resListButton: {
    ...theme.typography.button,
    fontFamily: "Permanent Marker",
    color: "#fff100",
  },
  listItem: {
    listStyleType: "none",
    fontFamily: "Permanent Marker",
    color: "#fff100",
  },
  inviteButton: {
    fontFamily: "Permanent Marker",
    color: "#ff99bb",
  },
}));

const RestaurantContainer = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <ul>
        {props.resSelections.map((res) => (
          <Grid item key={res.yelpId}>
            <li className={classes.listItem}>{res.yelpName}</li>
            <Grid item>
              <Button
                className={classes.resListButton}
                variant="contained"
                color="secondary"
                onClick={() => props.removal(res.yelpId)}
              >
                remove
              </Button>
            </Grid>
          </Grid>
        ))}
      </ul>
      <Button
        className={classes.inviteButton}
        variant="contained"
        color="secondary"
        size="large"
      >
        INVITE FRIENDS
      </Button>
    </Grid>
  );
};

export default RestaurantContainer;
