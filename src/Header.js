import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import logo from './logo.png';

const StyledAppBar = styled(AppBar)`
  background-color: coral;
`;

const StyledTypography = styled(Typography)`
  justify-content: flex-end;
  color: black;
  margin-left: 1em;
  font-weight: bolder;
  font-size: 2em;
`;

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Box
            component="img"
            sx={{ height: 60 }}
            alt="Logo"
            src={logo}
          />
          <StyledTypography variant="h6" component="div">
            RECIPE FINDER
          </StyledTypography>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
