import React from "react";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MessageIcon from "@mui/icons-material/Message";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BallotIcon from "@mui/icons-material/Ballot";

import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  List,
  Container,
} from "@mui/material";
import { useHistory } from "react-router-dom";

const data = [
  {
    label: "All Blogs",
    icon: <BallotIcon />,
    actionPath: "/allblogs",
  },
  {
    label: "Write a blog",
    icon: <DriveFileRenameOutlineIcon />,
    actionPath: "/writeblog",
  },
  {
    label: "Inbox",
    icon: <MessageIcon />,
    actionPath: "/",
  },
  {
    label: "Trending",
    icon: <AccountTreeIcon />,
    actionPath: "/",
  },
];

function Drawer() {
  const history = useHistory();
  return (
    <>
      <Toolbar />
      <Divider />
      <Container>
        <List>
          {data.map(({ label, icon, actionPath }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton onClick={() => history.push(actionPath)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default Drawer;
