import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

import { useHistory } from "react-router-dom";

function ProfileSelector() {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const history = useHistory();

  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {history.location.pathname !== "/" && (
        <IconButton onClick={() => history.push("/")}>
          <HomeIcon color="inherit" sx={{ fontSize: "30px" }} />
        </IconButton>
      )}

      <IconButton
        id="basic-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon color="inherit" sx={{ fontSize: "30px" }} />
      </IconButton>
      <Menu
        id="basic-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ top: "50px" }}
      >
        <Container>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => history.push("/profile")}>
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="My Profile"
                  sx={{ whiteSpace: "nowrap" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ whiteSpace: "nowrap" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Container>
      </Menu>
    </>
  );
}

export default ProfileSelector;
