import { Grid, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import AboutCard from "./AboutCard";
import { sidebar } from "./Data";
import IconText from "../../Utility/IconText";

function SideBar() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <AboutCard />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Stack gap={0}>
          <Typography variant="h6" gutterBottom>
            {sidebar.archivesTitle}
          </Typography>
          <List>
            {sidebar.archives.map((item, index) => {
              return (
                <ListItem key={`${item.title}__${index}`}>
                  <Link href={item.url}>{item.title}</Link>
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Stack gap={1}>
          <Typography variant="h6" gutterBottom>
            {sidebar.socialTitle}
          </Typography>
          {sidebar.social.map((item, index) => {
            return (
              <ListItem key={`${item.name}__${index}`}>
                <IconText icon={item.icon}>
                  <Link href="#">{item.name}</Link>
                </IconText>
              </ListItem>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SideBar;
