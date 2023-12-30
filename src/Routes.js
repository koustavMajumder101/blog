import React from "react";
import Blog from "./pages/Blog";
import AllBlogs from "./pages/AllBlogs";
import { Switch, Route } from "react-router-dom";
import Writeblog from "./pages/Writeblog";
import Profile from "./pages/Profile";
import SpecificBlog from "./pages/SpecificBlog";
import MyPosts from "./pages/MyPosts";

function Routes() {
  const routeData = [
    {
      path: "/",
      component: Blog,
      exact: true,
    },
    {
      path: "/allblogs",
      component: AllBlogs,
      exact: true,
    },
    {
      path: "/writeblog",
      component: Writeblog,
      exact: true,
    },
    {
      path: "/profile",
      component: Profile,
      exact: true,
    },
    {
      path: "/myposts",
      component: MyPosts,
      exact: true,
    },
    {
      path: "/blog/:id",
      component: SpecificBlog,
      exact: true,
    },
  ];
  return (
    <Switch>
      {routeData.map((route, index) => {
        return <Route key={index} {...route} />;
      })}
    </Switch>
  );
}

export default Routes;
