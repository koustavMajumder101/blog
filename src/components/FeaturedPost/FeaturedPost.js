import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import MountainImage from "../../assets/images/mountain.jpeg";
import { data } from "./Data";
import { constat } from "./Constants";

const styles = {
  cover: {
    backgroundImage: `url(${MountainImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `cover`,
    padding: "35px 25px",
    opacity: 1,
    // height: "40vh",
    marginBottom: "10px",
  },
  title: {
    fontSize: "40px",
  },
  content: { transition: "all 1s ease", opacity: 1 },
  btn: {
    marginTop: "20px",
  },
};

function FeaturedPost() {
  const [fullLengthPost, setFullLengthPost] = useState(false);
  return (
    <Card sx={styles.cover}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={7} sm={7} xl={7}>
            <Typography variant="h6" gutterBottom sx={styles.title}>
              {constat.title}
            </Typography>
            <Typography variant="h7" sx={styles.content}>
              {fullLengthPost
                ? data.post
                : `${data.post.slice(0, data.post.length / 3)} ......`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          color="inherit"
          sx={styles.btn}
          onClick={() => setFullLengthPost(!fullLengthPost)}
        >
          {fullLengthPost ? constat.button.collapse : constat.button.label}
        </Button>
      </CardActions>
    </Card>
  );
}

export default FeaturedPost;
