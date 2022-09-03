import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  const typoStyle = {
    color: "red",
    marginBottom: 100,
    fontWeight: 700,
  };

  const paperStyle = {
    marginTop: 100,
  };
  return (
    <Paper elevation={5} style={paperStyle}>
      <div className={styles.container}>
        <Typography gutterBottom variant="h2" component="h2" style={typoStyle}>
          Global Covid 19 Details
        </Typography>
        <Grid container spacing={3} justify="center">
          <CardComponent
            className={styles.infected}
            cardTitle="Infected"
            value={confirmed.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of active cases from COVID-19."
          />
          <CardComponent
            className={styles.recovered}
            cardTitle="Recovered"
            value={recovered.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of recoveries from COVID-19."
          />
          <CardComponent
            className={styles.deaths}
            cardTitle="Deaths"
            value={deaths.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of deaths caused by COVID-19."
          />
        </Grid>
      </div>
    </Paper>
  );
};

export default Info;
