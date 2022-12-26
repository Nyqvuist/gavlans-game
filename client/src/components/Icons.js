import React from "react";
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
  const tooltips = useMediaQuery("(max-width: 479px)");

  return (
    <>
      <Grid
        container
        spacing={tooltips ? 8 : 12}
        className="first-row"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 8 }}
      >
        <Grid item>
          <>
            {tooltips ? (
              <>
                <div className="container-box">
                  <Box className="icons-box" sx={{ mb: 1 }}>
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
          {tooltips ? (
            <>
              <div className="container-box">
                <Box className="icons-box" sx={{ mb: 1 }}>
                  <Typography className="text-box">LEAGUE</Typography>
                </Box>
              </div>
              <NavLink
                to="/start"
                state={{ game: ["league"], title: ["league of legends"] }}
              >
                <img className="img" src={league} alt="league" />
              </NavLink>
            </>
          ) : (
            <Tooltip
              title={<h1 className="tooltip-h1">LEAGUE</h1>}
              TransitionComponent={Zoom}
              placement="top"
            >
              <NavLink
                to="/start"
                state={{ game: ["league"], title: ["league of legends"] }}
              >
                <img className="img" src={league} alt="league" />
              </NavLink>
            </Tooltip>
          )}
        </Grid>
        <Grid item className="container">
          {tooltips ? (
            <>
              <div className="container-box">
                <Box className="icons-box" sx={{ mb: 1 }}>
                  <Typography className="text-box">GOD OF WAR</Typography>
                </Box>
              </div>
              <NavLink
                to="/start"
                state={{ game: ["gow"], title: ["god of war"] }}
              >
                <img className="img" src={gow} alt="gow" />
              </NavLink>
            </>
          ) : (
            <Tooltip
              title={<h1 className="tooltip-h1">GOD OF WAR</h1>}
              TransitionComponent={Zoom}
              placement="top"
            >
              <NavLink
                to="/start"
                state={{ game: ["gow"], title: ["god of war"] }}
              >
                <img className="img" src={gow} alt="gow" />
              </NavLink>
            </Tooltip>
          )}
        </Grid>
        <Grid item>
          {tooltips ? (
            <>
              <div className="container-box">
                <Box className="icons-box" sx={{ mb: 1 }}>
                  <Typography className="text-box">DARK SOULS</Typography>
                </Box>
              </div>
              <NavLink
                to="/start"
                state={{ game: ["souls"], title: ["dark souls"] }}
              >
                <img className="img" src={souls} alt="souls" />
              </NavLink>
            </>
          ) : (
            <Tooltip
              title={<h1 className="tooltip-h1">DARK SOULS</h1>}
              TransitionComponent={Zoom}
              placement="top"
            >
              <NavLink
                to="/start"
                state={{ game: ["souls"], title: ["dark souls"] }}
              >
                <img className="img" src={souls} alt="souls" />
              </NavLink>
            </Tooltip>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={tooltips ? 8 : 12}
        className="second-row"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Grid item>
          {tooltips ? (
            <>
              <div className="container-box">
                <Box className="icons-box" sx={{ mb: 1 }}>
                  <Typography className="text-box">FOOTBALL</Typography>
                </Box>
              </div>
              <NavLink
                to="/start"
                state={{ game: ["football"], title: ["football"] }}
              >
                <img className="img" src={football} alt="football" />
              </NavLink>
            </>
          ) : (
            <Tooltip
              title={<h1 className="tooltip-h1">FOOTBALL</h1>}
              TransitionComponent={Zoom}
              placement="bottom"
            >
              <NavLink
                to="/start"
                state={{ game: ["football"], title: ["football"] }}
              >
                <img className="img" src={football} alt="football" />
              </NavLink>
            </Tooltip>
          )}
        </Grid>
        <Grid item>
          {tooltips ? (
            <>
              <div className="container-box">
                <Box className="icons-box" sx={{ mb: 1 }}>
                  <Typography className="text-box">HOCKEY</Typography>
                </Box>
              </div>
              <NavLink
                to="/start"
                state={{ game: ["hockey"], title: ["hockey"] }}
              >
                <img className="img" src={hockey} alt="hockey" />
              </NavLink>
            </>
          ) : (
            <Tooltip
              title={<h1 className="tooltip-h1">HOCKEY</h1>}
              TransitionComponent={Zoom}
              placement="bottom"
            >
              <NavLink
                to="/start"
                state={{ game: ["hockey"], title: ["hockey"] }}
              >
                <img className="img" src={hockey} alt="hockey" />
              </NavLink>
            </Tooltip>
          )}
        </Grid>
        <Grid item className="container">
          {tooltips ? (
            <>
              <div className="container-box">
                <Box className="icons-box" sx={{ mb: 1 }}>
                  <Typography className="text-box">SOCCER</Typography>
                </Box>
              </div>
              <NavLink
                to="/start"
                state={{ game: ["soccer"], title: ["soccer"] }}
              >
                <img className="img" src={soccer} alt="soccer" />
              </NavLink>
            </>
          ) : (
            <Tooltip
              title={<h1 className="tooltip-h1">SOCCER</h1>}
              TransitionComponent={Zoom}
              placement="bottom"
            >
              <NavLink
                to="/start"
                state={{ game: ["soccer"], title: ["soccer"] }}
              >
                <img className="img" src={soccer} alt="soccer" />
              </NavLink>
            </Tooltip>
          )}
        </Grid>
        <Grid item>
          {tooltips ? (
            <>
              <div className="container-box">
                <Box className="icons-box" sx={{ mb: 1 }}>
                  <Typography className="text-box">BASKETBALL</Typography>
                </Box>
              </div>
              <NavLink
                to="/start"
                state={{ game: ["basketball"], title: ["basketball"] }}
              >
                <img className="img" src={basketball} alt="basketball" />
              </NavLink>
            </>
          ) : (
            <Tooltip
              title={<h1 className="tooltip-h1">BASKETBALL</h1>}
              TransitionComponent={Zoom}
              placement="bottom"
            >
              <NavLink
                to="/start"
                state={{ game: ["basketball"], title: ["basketball"] }}
              >
                <img className="img" src={basketball} alt="basketball" />
              </NavLink>
            </Tooltip>
          )}
        </Grid>
      </Grid>
    </>
  );
}
