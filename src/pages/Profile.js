import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Navtoolbar from "../components/Navtoolbar";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import IconText from "../components/Utility/IconText";
import ShareIcon from "@mui/icons-material/Share";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import { sidebar } from "../components/Markup/SideBar.js/Data";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MailIcon from "@mui/icons-material/Mail";

import AvatatImage from "../assets/images/content/Image-3.jpeg";

import { useHistory } from "react-router-dom";

const profileData = {
  name: "John Doe",
  about:
    "John Doe is a fictional character that represents the average person. He is often used as an example in various contexts and is known for his anonymity. In many cases, John Doe is used in legal and medical scenarios when the actual identity of a person is not known or cannot be revealed. The name John Doe is derived from the common practice in the UK of using John as a placeholder name for an unknown or anonymous person, and Doe as a placeholder name for an unidentified female, especially in legal contexts.",
};

const quickLinksData = [
  {
    title: "My Posts",
    icon: <DynamicFeedIcon />,
    path: "/myposts",
  },
  {
    title: "Inbox",
    icon: <MailIcon />,
    path: "/123",
  },
];

function Profile() {
  const history = useHistory();
  const openLink = (link) => {
    window.open(link);
  };

  return (
    <Container>
      <Navtoolbar
        heading="Profile"
        headingIcon={<PersonIcon sx={{ fontSize: "30px" }} />}
      />
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={3}
          sx={{ height: "100vh" }}
        >
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{ marginBottom: "30px" }}>
              {profileData.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "20px" }}>
              {profileData.about}
            </Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <IconText
                  gap={3}
                  icon={<ShareIcon sx={{ fontSize: "30px" }} />}
                >
                  <Typography variant="h6">Social media</Typography>
                </IconText>
              </AccordionSummary>
              <Divider sx={{ borderWidth: "1px" }} />
              <AccordionDetails>
                <Container>
                  <List>
                    {sidebar.social.map(({ name, icon, link }) => (
                      <ListItem
                        key={name}
                        disablePadding
                        onClick={() => openLink(link)}
                      >
                        <ListItemButton>
                          <ListItemIcon>{icon}</ListItemIcon>
                          <ListItemText
                            primary={
                              <Link
                                target="_blank"
                                href={link}
                                underline="none"
                              >
                                {name}
                              </Link>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Container>
              </AccordionDetails>
            </Accordion>
            <Toolbar />
          </Box>
          <Divider sx={{ borderWidth: "1px" }} />
          <Box sx={{ padding: "20px" }}>
            <Box sx={{ padding: "25px" }}>
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                badgeContent={
                  <IconButton>
                    <CameraAltIcon />
                  </IconButton>
                }
              >
                <Container>
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 256, height: 256, backgroundColor: "#C74F3E" }}
                    src={AvatatImage}
                  />
                  {/* <Typography variant="h1">JD</Typography> */}
                  {/* </Avatar> */}
                </Container>
              </Badge>
            </Box>
            <Divider sx={{ borderWidth: "1px" }} />
            <Box sx={{ padding: "20px" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <IconText
                    gap={3}
                    icon={<LeakAddIcon sx={{ fontSize: "30px" }} />}
                  >
                    <Typography variant="h6">Quick links</Typography>
                  </IconText>
                </AccordionSummary>
                <Divider sx={{ borderWidth: "1px" }} />
                <AccordionDetails>
                  <Container>
                    <List>
                      {quickLinksData.map(({ title, icon, path }) => (
                        <ListItem key={title} disablePadding>
                          <ListItemButton onClick={() => history.push(path)}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={title} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Toolbar />
          </Box>
        </Stack>
      </Container>
    </Container>
  );
}

export default Profile;
