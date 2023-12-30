import {
  Box,
  Button,
  Card,
  CardContent,
  Hidden,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";

import React from "react";

function PostCard({ post }) {
  const { title, content, image } = post;
  const history = useHistory();
  return (
    <Card sx={{ display: "flex", height: "auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {content.length > 166 ? `${content.slice(0, 166)}.....` : content}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            variant="text"
            color="inherit"
            onClick={() =>
              history.push(`/blog/${Math.floor(Math.random() * 6) + 1}`)
            }
          >
            Continue reading…
          </Button>
        </Box>
      </Box>
      <Hidden xsDown>
        <img
          src={image}
          alt={title}
          className="iamgeCard"
          style={{ width: "30%" }}
        />
      </Hidden>
    </Card>
  );
}

export default PostCard;
