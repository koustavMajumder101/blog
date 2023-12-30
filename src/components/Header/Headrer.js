import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
// import EditIcon from "@mui/icons-material/Edit";
// import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Badge from "@mui/material/Badge";
import React, { useState } from "react";

import DrawerValues from "./Drawer";
import ProfileSelector from "../ProfileSelector/ProfileSelector";

const styles = {
  title: { flexGrow: 1, marginLeft: "5px" },
  subTitle: { dispaly: "flex", justifyContent: "center", alignItems: "center" },
};

function Headrer() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Toolbar>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon color="inherit" />
        </IconButton>
        <Typography variant="h6" sx={styles.title}>
          Blogging
        </Typography>

        <Button disableElevation onClick={handleClick} endIcon={<TuneIcon />}>
          Options
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
        >
          <MenuItem disableRipple>
            <SettingsIcon />
            Technology
          </MenuItem>
          <MenuItem disableRipple>
            <SnowshoeingIcon />
            Travelling
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <ArchiveIcon />
            Archive
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHorizIcon />
            More
          </MenuItem>
        </StyledMenu>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon color="inherit" />
          </Badge>
        </IconButton>
        <ProfileSelector />
        {/* <IconButton>
          <AccountCircleIcon color="inherit" />
        </IconButton> */}
      </Toolbar>
      <Divider sx={{ borderWidth: "1px" }} />
      <Toolbar sx={styles.subTitle}>
        <Typography variant="h6">
          {"Express your thoughts over here".toUpperCase()}
        </Typography>
      </Toolbar>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        // ModalProps={{
        //   keepMounted: true, // Better open performance on mobile.
        // }}
        // sx={{
        //   display: { xs: "block", sm: "none" },
        //   "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
        // }}
      >
        <DrawerValues />
      </Drawer>
    </>
  );
}

export const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default Headrer;
