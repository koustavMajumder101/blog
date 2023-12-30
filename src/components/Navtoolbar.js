import { Box, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import IconText from "./Utility/IconText";

import { useHistory } from "react-router-dom";
import ProfileSelector from "./ProfileSelector/ProfileSelector";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

function Navtoolbar({ heading, headingIcon }) {
  const history = useHistory();
  return (
    <>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconText icon={headingIcon} gap={2}>
            <Typography variant="h6">{heading}</Typography>
          </IconText>
        </Box>
        <ProfileSelector />
        <IconButton onClick={() => history.goBack()}>
          <ArrowCircleLeftIcon color="inherit" sx={{ fontSize: "30px" }} />
        </IconButton>
      </Toolbar>
      <Divider sx={{ borderWidth: "1px", color: "#fff" }} />
    </>
  );
}

export default Navtoolbar;
