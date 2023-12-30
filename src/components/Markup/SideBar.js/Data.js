import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const sidebar = {
  title: "About",
  archivesTitle: "Archives",
  socialTitle: "Social Media Links",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    {
      name: "GitHub",
      icon: <GitHubIcon color="primary" />,
      link: "https://www.github.com",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon color="primary" />,
      link: "https://www.twitter.com",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon color="primary" />,
      link: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon color="primary" />,
      link: "https://www.instagram.com",
    },
  ],
};
