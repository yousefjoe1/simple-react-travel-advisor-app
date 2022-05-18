import React from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";

import LocationOnIcons from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const styles = useStyles();
  return (
    <Card style={{ marginTop: "10px" }} elevation={5}>
      <CardMedia
        component={"img"}
        hieght="350"
        image={
          place.photo
            ? place.photo.images.medium.url
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/2560px-Tom%27s_Restaurant%2C_NYC.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {place.name && place.name}
        </Typography>
        <Typography display="block" variant="subtitle1">
          <Rating value={Number(place.rating)} readOnly />
        </Typography>
        <Box display={"flex"} justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <img src={award.images.small} />
            <Typography variant="subtitle2">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name, key }) => (
          <Chip key={key} size="small" label={name} className={styles.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={styles.subtitle}
          >
            <LocationOnIcons />
            {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={styles.subtitle}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Web Site
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
