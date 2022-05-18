import React from "react";

import useStyles from "./styles";

import GoogleMapRreact from "google-map-react";

import { Paper, Typography, useMediaQuery } from "@material-ui/core";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import { Rating } from "@material-ui/lab";

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  const styles = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <div className={styles.mapContainer}>
      <GoogleMapRreact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place, i) => (
          <div
            className={styles.markerContainer}
            lat={Number(place.latitude)}
            lng={place.longitude}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon fontSize="large" />
            ) : (
              <Paper elevation={4} className={styles.paper}>
                <Typography variant="body2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  src={
                    place.photo
                      ? place.photo.images.medium.url
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/2560px-Tom%27s_Restaurant%2C_NYC.jpg"
                  }
                  className={styles.pointer}
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapRreact>
    </div>
  );
};

export default Map;
