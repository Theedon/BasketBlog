import basketball from "./images/basketball.png";
import playerAvatar from "./images/jayson.jpg";
import "./styles/Landing.modules.css";
import { Typography, Container, Avatar, Grid, Button } from "@mui/material";

const Landing = () => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        sx={{ width: "100%", maxWidth: "500" }}
      >
        <Typography
          sx={{ marginBottom: 7 }}
          color="primary"
          variant="h3"
          gutterBottom
        >
          Welcome to BasketBlog
        </Typography>

        <Container>
          <img className="imageBox" src={basketball}></img>
        </Container>
        <Grid container justifyContent="center">
          <Avatar
            src={playerAvatar}
            alt="player avatar"
            sx={{ width: 60, height: 70, marginBottom: 2 }}
          ></Avatar>
        </Grid>

        <Grid container justifyContent="center">
          <Button variant="outlined" size="large" href="/teams">
            Explore
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
