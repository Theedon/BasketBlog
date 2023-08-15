import {
  Grid,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import Person2Icon from "@mui/icons-material/Person2";
import { Link } from "react-router-dom";

const Navbar = ({ value, handleChange }) => {
  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            handleChange(newValue);
          }}
        >
          <BottomNavigationAction href="/" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            component={Link}
            to="/teams"
            label="Teams"
            icon={<SportsBasketballIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/players"
            href="/players"
            label="Players"
            icon={<Person2Icon />}
          />
        </BottomNavigation>
      </Box>
    </Grid>
  );
};

export default Navbar;
