import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Grid,
} from "@mui/material";
import nbaLogo from "./images/nba.svg";
import useFetch from "./useFetch.js";

const Teams = () => {
  const url = "http://localhost:8000/teams";
  const { data: teams, loading, error } = useFetch(url);

  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error accessing teams data {`\n${error}`}</h2>}
        {teams && (
          <nav aria-label="Team players">
            <List>
              {teams.map((team) => (
                <ListItem key={teams.id}>
                  <ListItemButton to={`/teaminfo/${team.id}`}>
                    <ListItemIcon>
                      <img src={nbaLogo} width={24} height={24}></img>
                    </ListItemIcon>
                    <ListItemText
                      primary={team.teamName}
                      secondary={team.hostCity}
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

export default Teams;
