import React from "react";
import "../styles/main.css";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Footer from "./Footer";
import logo from "../assets/Gavlans_Game_Logo_v2.png";
import "../styles/footer.css";
import "../styles/Tooltip.css";
import Icons from "./Icons";

export default function Main() {
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item sx={{ mt: 2, mb: 2 }}>
          <img
            className="main-logo"
            src={logo}
            alt="logo"
            width="200"
            height="200"
          />
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h2"
              sx={{ color: "#D9DCD6", textAlign: "center" }}
            >
              Gavlan's Game
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={{
                pb: 8,
                color: "#D9DCD6",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              The best speed trivia game.
            </Typography>
          </Grid>
        </Grid>
        <Icons />
        <Footer className="footer" />
      </Grid>
    </>
  );
}
