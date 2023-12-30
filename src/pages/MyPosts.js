import { Container, Grid, Toolbar } from "@mui/material";
import React from "react";
import Navtoolbar from "../components/Navtoolbar";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import { blogData, buzzWords } from "../components/BlogCard/Data";
import Blogcard from "../components/BlogCard/Blogcard";

import { useHistory } from "react-router-dom";
import { shuffle } from "../components/Utility/Util";

function MyPosts() {
  const history = useHistory();
  const pushToSpecificBlog = (id) => {
    history.push(`/blog/${id}`);
  };
  const shuffeledWords = shuffle(buzzWords);
  return (
    <Container>
      <Navtoolbar
        heading="My posts"
        headingIcon={<AcUnitIcon sx={{ fontSize: "30px" }} />}
      />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        sx={{ paddingTop: "20px" }}
      >
        {blogData.slice(5, 10).map(({ name, content, timestamp }, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} xl={6} key={name}>
              <Blogcard
                buzzWord={shuffeledWords[index]}
                content={content}
                heading={name}
                timestamp={timestamp}
                pushBlog={() => pushToSpecificBlog(index)}
              />
            </Grid>
          );
        })}
      </Grid>
      <Toolbar />
    </Container>
  );
}

export default MyPosts;
