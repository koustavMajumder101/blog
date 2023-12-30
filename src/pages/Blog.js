import React from "react";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost";
import { Container, Toolbar } from "@mui/material";
import Headrer from "../components/Header/Headrer";
import AllPosts from "../components/AllPosts/AllPosts";
import Markup from "../components/Markup/Markup";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";

function Blog() {
  return (
    <Container>
      <Headrer />
      <FeaturedPost />
      <AllPosts />
      <Markup />
      <BottomNavigation
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
      <Toolbar />
    </Container>
  );
}

export default Blog;
