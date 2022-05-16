import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "sans-serif" }} variant="h6">
          Movies app
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3"></Typography>
      </Box>
    </div>
  );
};

export default About;
