// PlayerInfo.js
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Grid, Typography } from "@mui/material";
import styles from "./PlayerInfo.module.css"; // Import the CSS module

const PlayerInfo = () => {
  const { id } = useParams();
  const url = `https://basketblog-api.vercel.app/players/${id}`;
  const { data: player, loading, error } = useFetch(url);

  return (
    <div className={styles.playerInfoContainer}>
      {loading && (
        <Typography className={styles.loadingMessage}>Loading...</Typography>
      )}
      {error && (
        <Typography className={styles.errorMessage}>
          Error retrieving player data
        </Typography>
      )}
      {player && (
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} className={styles.playerInfoGrid}>
            <Typography
              gutterBottom
              variant="h4"
            >{`Name: ${player.name}`}</Typography>
            <Typography
              gutterBottom
              variant="h5"
            >{`Position: ${player.position}`}</Typography>
            <Typography
              gutterBottom
              variant="h6"
            >{`Age: ${player.age}`}</Typography>
            <Typography
              gutterBottom
              variant="h6"
            >{`Height: ${player.height}`}</Typography>
            <Typography
              gutterBottom
              variant="h6"
            >{`Nationality: ${player.nationality}`}</Typography>{" "}
            <Typography
              gutterBottom
              variant="h6"
            >{`Wiki: ${player.biography}`}</Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default PlayerInfo;
