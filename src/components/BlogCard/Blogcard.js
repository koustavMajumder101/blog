import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Stack } from "@mui/material";

function Blogcard({ buzzWord, heading, content, timestamp, pushBlog }) {
  return (
    <Card sx={{ backgroundColor: "#F7F3F3", color: "#1b1b1b" }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <Link href="#" underline="hover" color="blue">
              {buzzWord}
            </Link>
          </Typography>
          <Typography>
            {new Date(timestamp * 1000).toLocaleDateString("en-GB", {
              //   weekday: 'long',
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </Stack>
        <Typography variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2">
          {content.length > 120 ? `${content.slice(0, 120)}...` : content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="inherit"
          variant="text"
          onClick={pushBlog ? pushBlog : undefined}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Blogcard;
