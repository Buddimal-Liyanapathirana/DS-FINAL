import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#229954 " }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <MovieFilterIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "1/0px" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/movies" label="Movies" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            <Tab LinkComponent={NavLink} to="/cart" label="Cart" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
