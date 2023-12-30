import { Button, Container, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import SendIcon from "@mui/icons-material/Send";

import { textStyle } from "./../components/Utility/Constant";

import Navtoolbar from "../components/Navtoolbar";

function Writeblog() {
  return (
    <Container>
      <Navtoolbar
        heading="Write a blog"
        headingIcon={<DriveFileRenameOutlineIcon sx={{ fontSize: "30px" }} />}
      />
      <Stack gap={2} sx={{ marginTop: "20px" }}>
        <TextField
          id="filled-basic"
          placeholder="Blog heading"
          sx={{ ...textStyle, width: "100%" }}
          variant="outlined"
          InputLabelProps={{ shrin: false }}
        />
        <TextField
          id="outlined-multiline-static"
          sx={{
            ...textStyle,
          }}
          InputProps={{
            classes: {
              "&::placeholder": {
                color: "red",
                textAlign: "center",
              },
            },
          }}
          placeholder="Blog content"
          InputLabelProps={{ shrin: false }}
          multiline
          rows={12}
        />
        <Stack justifyContent="flex-end" direction="row-reverse">
          <Grid container>
            <Grid item xs={12} sm={11} />
            <Grid
              item
              xs={12}
              sm={1}
              //   sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                // color="secondary"
                sx={{ width: "100%" }}
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Writeblog;
