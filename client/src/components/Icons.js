import React, { useState } from "react";
import "../styles/icons.css";
import { Grid, Typography, useMediaQuery, Zoom } from "@mui/material";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import csgo from "../assets/GG_CSGO_Icon.png";
import league from "../assets/GG_League_of_Legends_Icon.png";
import souls from "../assets/GG_Dark_Souls_Icon.png";
import gow from "../assets/GG_God_of_War_Icon.png";
import football from "../assets/Gavlans_Game_Football_Icon.png";
import basketball from "../assets/Gavlans_Game_Basketball_Icon_v2.png";
import hockey from "../assets/Gavlans_Game_Hockey_Icon.png";
import soccer from "../assets/Gavlans_Game_Soccer_Icon.png";
import "../styles/Tooltip.css";
import { Box } from "@mui/system";

export default function Icons() {
  const [open, setOpen] = useState(true);

  const tooltips = useMediaQuery("(max-width: 479px)");

  return (
    <>
      <Grid
        container
        spacing={12}
        className="first-row"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Grid item>
          <>
            {tooltips ? (
              <>
                <div className="container-box">
                  <Box className="icons-box">
                    <Typography className="text-box">CS:GO</Typography>
                  </Box>
                </div>
                <NavLink
                  to="/start"
                  state={{ game: ["csgo"], title: ["cs:go"] }}
                >
                  <div className="img">
                    <img className="img-csgo" src={csgo} alt="csgo" />
                  </div>
                </NavLink>
              </>
            ) : (
              <Tooltip
                title={<h1 className="tooltip-h1">CS:GO</h1>}
                TransitionComponent={Zoom}
                placement="top"
              >
                <NavLink
                  to="/start"
                  state={{ game: ["csgo"], title: ["cs:go"] }}
                >
                  <div className="img">
                    <img className="img-csgo" src={csgo} alt="csgo" />
                  </div>
                </NavLink>
              </Tooltip>
            )}
          </>
        </Grid>
        <Grid item>
          <NavLink
            to="/start"
            state={{ game: ["league"], title: ["league of legends"] }}
          >
            {tooltips ? (
              <Tooltip
                title={<h1 className="tooltip-h1">LEAGUE</h1>}
                open={open}
                placement="top"
              >
                <img className="img" src={league} alt="league" />
              </Tooltip>
            ) : (
              <Tooltip
                title={<h1 className="tooltip-h1">LEAGUE</h1>}
                TransitionComponent={Zoom}
                placement="top"
              >
                <img className="img" src={league} alt="league" />
              </Tooltip>
            )}
          </NavLink>
        </Grid>
        <Grid item className="container">
          <NavLink to="/start" state={{ game: ["gow"], title: ["god of war"] }}>
            {tooltips ? (
              <Tooltip
                title={<h1 className="tooltip-h1">GOD OF WAR</h1>}
                open={open}
                placement="top"
              >
                <img className="img" src={gow} alt="gow" />
              </Tooltip>
            ) : (
              <Tooltip
                title={<h1 className="tooltip-h1">GOD OF WAR</h1>}
                TransitionComponent={Zoom}
                placement="top"
              >
                <img className="img" src={gow} alt="gow" />
              </Tooltip>
            )}
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/start"
            state={{ game: ["souls"], title: ["dark souls"] }}
          >
            {tooltips ? (
              <Tooltip
                title={<h1 className="tooltip-h1">DARK SOULS</h1>}
                open={open}
                placement="top"
              >
                <img className="img" src={souls} alt="souls" />
              </Tooltip>
            ) : (
              <Tooltip
                title={<h1 className="tooltip-h1">DARK SOULS</h1>}
                TransitionComponent={Zoom}
                placement="top"
              >
                <img className="img" src={souls} alt="souls" />
              </Tooltip>
            )}
          </NavLink>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={12}
        className="second-row"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Grid item>
          <NavLink
            to="/start"
            state={{ game: ["football"], title: ["football"] }}
          >
            {tooltips ? (
              <Tooltip
                title={<h1 className="tooltip-h1">FOOTBALL</h1>}
                open={open}
                placement="bottom"
              >
                <img className="img" src={football} alt="football" />
              </Tooltip>
            ) : (
              <Tooltip
                title={<h1 className="tooltip-h1">FOOTBALL</h1>}
                TransitionComponent={Zoom}
                placement="bottom"
              >
                <img className="img" src={football} alt="football" />
              </Tooltip>
            )}
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/start" state={{ game: ["hockey"], title: ["hockey"] }}>
            {tooltips ? (
              <Tooltip
                title={<h1 className="tooltip-h1">HOCKEY</h1>}
                open={open}
                placement="bottom"
              >
                <img className="img" src={hockey} alt="hockey" />
              </Tooltip>
            ) : (
              <Tooltip
                title={<h1 className="tooltip-h1">HOCKEY</h1>}
                TransitionComponent={Zoom}
                placement="bottom"
              >
                <img className="img" src={hockey} alt="hockey" />
              </Tooltip>
            )}
          </NavLink>
        </Grid>
        <Grid item className="container">
          <NavLink to="/start" state={{ game: ["soccer"], title: ["soccer"] }}>
            {tooltips ? (
              <Tooltip
                title={<h1 className="tooltip-h1">SOCCER</h1>}
                open={open}
                placement="bottom"
              >
                <img className="img" src={soccer} alt="soccer" />
              </Tooltip>
            ) : (
              <Tooltip
                title={<h1 className="tooltip-h1">SOCCER</h1>}
                TransitionComponent={Zoom}
                placement="bottom"
              >
                <img className="img" src={soccer} alt="soccer" />
              </Tooltip>
            )}
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/start"
            state={{ game: ["basketball"], title: ["basketball"] }}
          >
            {tooltips ? (
              <Tooltip
                title={<h1 className="tooltip-h1">BASKETBALL</h1>}
                open={open}
                placement="bottom"
              >
                <img className="img" src={basketball} alt="basketball" />
              </Tooltip>
            ) : (
              <Tooltip
                title={<h1 className="tooltip-h1">BASKETBALL</h1>}
                TransitionComponent={Zoom}
                placement="bottom"
              >
                <img className="img" src={basketball} alt="basketball" />
              </Tooltip>
            )}
          </NavLink>
        </Grid>
      </Grid>
    </>
  );
}
