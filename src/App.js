import React, { useEffect, useState } from 'react';

// require('dotenv').config()

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import {CssBaseline, Grid} from '@material-ui/core'

import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  const [type, setType] = useState("restaurants");

  useEffect(() => {
    getPlacesData(type,bounds).then((res) => {
      console.log(res);
      setPlaces(res.data);
    });
  }, [coordinates,bounds,type]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=> {
      setCoordinates({lat: latitude,lng:longitude})
    })
  }, []);

  return (
    <>
    <CssBaseline />
    <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4} >
          <List type={type} setType={setType} places={places} />
        </Grid>
        <Grid item xs={12} md={8} >
          <Map places={places} setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}  />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
