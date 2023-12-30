import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "@mui/material";

const styles = {
  footer: {
    // backgroundColor: theme.palette.background.paper,
    marginTop: "10px",
    padding: "10px",
    marginBottom: "20px",
  },
};

function BottomNavigationPanel({ description, title }) {
  return (
    <footer sx={styles.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©
          <Link color="inherit" href="#">
            Your Website
          </Link>
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
}

export default BottomNavigationPanel;
