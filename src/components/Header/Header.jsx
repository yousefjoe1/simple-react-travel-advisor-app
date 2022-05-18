import React, { useState } from "react";

import { Autocomplete } from "@react-google-maps/api";

import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const styles = useStyles();

  // const [autocomplet, setAutocomplet] = useState(null);

  // const loaded = (autoC) => setAutocomplet(autoC);
  // const placechanged = () => {
  //   const lat = autocomplet.getPlace().geometry.location.lat();
  //   const lng = autocomplet.getPlace().geometry.location.lng();
  //   console.log(lat);
  //   setCoordinates({ lat, lng });
  // };

  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Typography className={styles.title} variant="h5">
          Travel Advisor
        </Typography>
        {/* <Box display={"flex"}>
          <Typography className={styles.title} variant="h6">
            Explore new places
          </Typography>
          <Autocomplete onLoad={loaded} onPlaceChanged={placechanged}>
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="search..."
                classes={{ root: styles.inputRoot, input: styles.inputinput }}
              />
            </div>
          </Autocomplete>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
