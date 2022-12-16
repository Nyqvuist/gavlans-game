import React from "react";
import { Typography } from "@mui/material";
import logo from "../assets/Gavlans_Game_Logo_v2.png";
import "../styles/play.css";
import { NavLink } from "react-router-dom";

export default function Header({ title }) {
  return (
    <>
      <NavLink to="/">
        <img
          className="header-logo"
          src={logo}
          alt="logo"
          width="125"
          height="125"
        />
      </NavLink>
      <Typography className="header-title" sx={{ fontFamily: "Cinzel" }}>
        {title}
      </Typography>
    </>
  );
}
