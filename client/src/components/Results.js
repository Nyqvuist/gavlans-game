import {
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/results.css";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import Header from "./Header";

export default function Results() {
  const results = useMediaQuery("(max-width: 578px)");

  const location = useLocation();
  const array = location.state.array[0];

  return (
    <>
      <Header title={location.state.title} />
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems={"center"}
        direction="column"
      >
        <Grid item>
          <Typography className="score">Your Score</Typography>
        </Grid>
        <Grid item>
          <Typography className="points">
            {location.state.score + " Points"}
          </Typography>
        </Grid>
        <Grid item>
          <Paper square className="summary-paper">
            <Typography className="summary-title">Results Summary</Typography>
            <Grid
              container
              rowSpacing={0}
              justifyContent="center"
              alignItems={"center"}
              direction="row"
            >
              <Grid item>
                {results ? (
                  <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Grid item sx={{ mr: 1, mb: 1 }}>
                      <Typography className="item-titles">Questions</Typography>
                      <Divider variant="middle" />
                    </Grid>
                    {array.map((item, index) => (
                      <Grid item key={index}>
                        <Typography className="item-map">
                          {" "}
                          Question #{item.Index}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Grid
                    container
                    spacing={1}
                    justifyContent="flex-start"
                    alignItems={"flex-start"}
                    direction="column"
                  >
                    <Grid item sx={{ mr: 20, mb: 1 }}>
                      <Typography className="item-titles">Questions</Typography>
                      <Divider variant="middle" />
                    </Grid>
                    {array.map((item, index) => (
                      <Grid item key={index}>
                        <Typography className="item-map">
                          {" "}
                          Question #{item.Index}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
              <Grid item>
                {results ? (
                  <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Grid item sx={{ mb: 1 }}>
                      <Typography className="item-titles">
                        Time Completed
                      </Typography>
                      <Divider variant="middle" />
                    </Grid>
                    {array.map((item, index) => (
                      <Grid item key={index}>
                        <Typography className="item-map">
                          {item.Time} Seconds
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Grid
                    container
                    spacing={1}
                    justifyContent="flex-end"
                    alignItems={"flex-end"}
                    direction="column"
                  >
                    <Grid item sx={{ mb: 1 }}>
                      <Typography className="item-titles">
                        Time Completed
                      </Typography>
                      <Divider variant="middle" />
                    </Grid>
                    {array.map((item, index) => (
                      <Grid item key={index}>
                        <Typography className="item-map">
                          {item.Time} Seconds
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sx={{ mt: 5 }}>
          <NavLink to="/">
            <Button className="home-page" variant="outlined">
              home
            </Button>
          </NavLink>
          <NavLink
            to="/play"
            style={{ textDecoration: "none" }}
            state={{
              game: [location.state.game[0][0]],
              title: [location.state.title],
            }}
          >
            <Button
              className="play-again-button"
              variant="contained"
              endIcon={<KeyboardArrowRightSharpIcon />}
            >
              Play Again
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </>
  );
}
