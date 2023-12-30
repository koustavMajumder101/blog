import {
  Box,
  Container,
  Divider,
  Grid,
  //   IconButton,
  //   Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SettingsIcon from "@mui/icons-material/Settings";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import React from "react";
import Blogcard from "../components/BlogCard/Blogcard";
import { blogData, buzzWords } from "../components/BlogCard/Data";
// import IconText from "../components/Utility/IconText";

import { useHistory } from "react-router-dom";
// import ProfileSelector from "../components/ProfileSelector/ProfileSelector";
import Navtoolbar from "../components/Navtoolbar";
import { shuffle } from "../components/Utility/Util";

function AllBlogs() {
  const history = useHistory();

  const pushToSpecificBlog = () => {
    const id = Math.floor(Math.random() * 6) + 1;
    history.push(`/blog/${id}`);
  };

  const shuffeledWords = shuffle(buzzWords);

  return (
    <Container sx={{ overflow: "hidden" }}>
      <Navtoolbar
        heading="All Blogs"
        headingIcon={<AlignHorizontalLeftIcon sx={{ fontSize: "30px" }} />}
      />
      <Container>
        <Stack
          //   alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          gap={3}
          //   justifyContent="flex-start"
        >
          <Box>
            <Toolbar>
              <Typography variant="h7" gutterBottom>
                Create blogs
              </Typography>
            </Toolbar>
            <Container>
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => history.push("/writeblog")}>
                    <ListItemIcon>
                      <DriveFileRenameOutlineIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Write a blog"
                      sx={{ whiteSpace: "nowrap" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Container>
          </Box>
          <Divider sx={{ borderWidth: "1px" }} />
          <Box sx={{ padding: "20px", height: "100vh", overflowY: "scroll" }}>
            <Container>
              <Grid container spacing={2}>
                {blogData.map(({ name, content, timestamp }, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={6} xl={6} key={name}>
                      <Blogcard
                        buzzWord={shuffeledWords[index]}
                        content={content}
                        heading={name}
                        timestamp={timestamp}
                        pushBlog={pushToSpecificBlog}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <Toolbar />
            </Container>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
}

export default AllBlogs;
