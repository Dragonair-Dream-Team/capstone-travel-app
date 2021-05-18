import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  resListButton: {
    ...theme.typography.button,
    fontFamily: "Permanent Marker",
    color: "#fff100",
  },
  listItem: {
    listStyleType: "none",
  },
  inviteButton: {
    fontFamily: "Permanent Marker",
    color: "#ff99bb",
  },
}));

const RestaurantContainer = (props) => {
  const restaurantToBackEnd = () => {
    const restaurantArray = props.resSelections.map(
      (selection) => selection.yelpId
    );
    console.log("resArray", restaurantArray);
  };

  const classes = useStyles();
  return (
    <Grid container direction="row" justify="flex-end" alignItems="center">
      <ul>
        {props.resSelections.map((res) => (
          <Grid container item key={res.yelpId}>
            <li className={classes.listItem}>{res.yelpName}</li>
            <Button
              className={classes.resListButton}
              variant="contained"
              color="secondary"
              onClick={() => props.removal(res.yelpId)}
            >
              remove
            </Button>
          </Grid>
        ))}
      </ul>
      <Link to='/emails'> 
      <Button
        className={classes.inviteButton}
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => props.addSelectionsToStore()}
      >
        INVITE FRIENDS
      </Button></Link>
    </Grid>
  );
};

export default RestaurantContainer;
