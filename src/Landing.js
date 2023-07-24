import basketball from "./images/basketball.png";
import playerAvatar from "./images/jayson.jpg";
import styles from "./styles/Landing.modules.css";
import { Typography, Box, Avatar, Grid, Button } from "@mui/material";

const Landing = () => {
  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: "500" }}>
        <Typography sx={{ color: "#F88158" }} variant="h3">
          Welcome to BasketBlog
        </Typography>
        {/* <br /> */}

        <Box>
          <img className={styles.imageBox} src={basketball}></img>
        </Box>

        <Grid container justifyContent="center">
          <Avatar
            src={playerAvatar}
            alt="player avatar"
            sx={{ width: 70, height: 70 }}
          ></Avatar>
        </Grid>
        <Grid container justifyContent="center">
          <Button variant="outlined" size="large  ">
            Explore
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default Landing;
