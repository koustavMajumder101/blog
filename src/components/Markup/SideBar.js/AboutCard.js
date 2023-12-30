import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { sidebar } from "./Data";

function AboutCard() {
  return (
    <Card sx={{ backgroundColor: "#F1EBF1", color: "#1b1b1b" }}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {sidebar.title}
        </Typography>
        <Typography variant="body2">{sidebar.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
