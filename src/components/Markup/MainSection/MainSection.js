import { Divider, Typography } from "@mui/material";
import React from "react";
import { posts } from "./Data";
import Markdown from "markdown-to-jsx";

function MainSection({ title }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider sx={{ borderWidth: "1px" }} />
      {posts.map((post, index) => {
        return <Markdown key={index}>{post.body}</Markdown>;
      })}
    </>
  );
}

export default MainSection;
