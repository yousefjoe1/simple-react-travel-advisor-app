import React, { useEffect, useState } from "react";

import useStyles from "./styles";

import {
  CircularProgress,
  Grid,
  InputLabel,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, type, setType }) => {
  const styles = useStyles();

  console.log(places);

  return (
    <div className={styles.container}>
      <Typography variant="h4">
        Resturants, Hotels & Attractions around you
      </Typography>
      <FormControl className={styles.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Resturants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl style={{ width: "30%" }} className={styles.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>+3</MenuItem>
          <MenuItem value={4}>+4</MenuItem>
          <MenuItem value={4.5}>+4.5</MenuItem>
        </Select>
      </FormControl> */}
      <Grid container spacing={3} className={styles.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
        <h3 style={{ marginTop: "30px" }}>
          {!places.length > 0 && "No thing To Show "}
        </h3>
      </Grid>
    </div>
  );
};

export default List;
