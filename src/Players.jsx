import useFetch from "./useFetch";
import Person3Icon from "@mui/icons-material/Person3";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const Players = () => {
  const url = "https://basketblog-api.vercel.app/players";
  const { data: players, loading, error } = useFetch(url);

  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error accessing players data {`\n${error}`}</h2>}
        {players && (
          <nav aria-label="Team players">
            <List>
              {players.map((player) => (
                <ListItem key={player.id}>
                  <ListItemButton
                    component={Link}
                    to={`/player/${player.playerId}`}
                  >
                    <ListItemIcon>
                      <Person3Icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={player.name}
                      secondary={player.nationality}
                    ></ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        )}
      </Box>
    </Grid>
  );
};

export default Players;
