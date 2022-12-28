import React from "react";
import "../styles/start.css";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Singleplayer from "../components/Singleplayer";
import Multiplayer from "../components/Multiplayer";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import "../styles/border.css";
import Footer from "./Footer";
import logo from "../assets/Gavlans_Game_Logo_v2.png";
import "../styles/footer.css";

export default function Start() {
  const location = useLocation();

  return (
    <Grid container spacing={0} justifyContent="center" alignItems="center">
      <Grid item sx={{ mt: 2, mb: 2 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <img
            className="main-logo"
            src={logo}
            alt="logo"
            width="200"
            height="200"
          />
        </Link>
      </Grid>
      <Grid
        container
        className="colored-grid-box"
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mx: 45 }}
      >
        <Grid
          container
          className="inner-grid-row"
          spacing={5}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ mt: 5, mb: 15.5 }}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              className="first-column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Paper className="fancy-border">
                  <Typography className="info-header">Quick Info</Typography>
                  <Typography className="info-1">
                    • You have 10 seconds to answer each question.
                  </Typography>
                  <Typography className="info-2">
                    • The faster you answer, the more points you will earn.
                  </Typography>
                  <Typography className="info-2">
                    • You will not know the results of your answers.
                  </Typography>
                  <Typography className="info-2">• Answer quickly!</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={{ mt: 2 }}>
                <Singleplayer category={location.state} />
              </Grid>
              <Grid item sx={{ mt: 9 }}>
                <Multiplayer category={location.state} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer className="footer" />
    </Grid>
  );
}
