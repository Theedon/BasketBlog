import basketball from "./images/basketball.png";
import playerAvatar from "./images/jayson.jpg";
import "./styles/Landing.modules.css";
import {
  Typography,
  Container,
  Box,
  Avatar,
  Grid,
  Button,
} from "@mui/material";

const Landing = () => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        sx={{ width: "100%", maxWidth: "500" }}
      >
        <Typography sx={{ color: "#F88158" }} variant="h3" gutterBottom>
          Welcome to BasketBlog
        </Typography>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <img className="imageBox" src={basketball}></img>
        </Container>
        <Grid container justifyContent="center">
          <Avatar
            src={playerAvatar}
            alt="player avatar"
            sx={{ width: 60, height: 70 }}
          ></Avatar>
        </Grid>
        <br />
        <br />
        <br />
        <br />
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
