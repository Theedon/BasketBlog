import { Grid, Box, Typography } from "@mui/material";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import Person3Icon from "@mui/icons-material/Person3";

const TeamInfo = () => {
  const { id } = useParams();
  const url = `https://basketblog-api.vercel.app/teams/${id}`;
  const { data, loading, error } = useFetch(url);
  const playersUrl = `https://basketblog-api.vercel.app/players/team/${id}`;
  const {
    data: playersData,
    loading: playersLoading,
    error: playersError,
  } = useFetch(playersUrl);

  return (
    <div>
      {loading && <Typography variant="h3">Loading...</Typography>}
      {error && (
        <Typography variant="h3">Error retrieving team data</Typography>
      )}
      {data && (
        <Grid container justifyContent="center">
          <Grid item xs={3}></Grid>
          <Grid item sx={{ marginTop: 5 }} xs={6} className="blogInfoGrid">
            <Typography className="blogInfo">{data.info}</Typography>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={4}></Grid>
          <Grid item sx={{ marginTop: 5 }}>
            <Typography variant="h5">Player List</Typography>
            <Box>
              {playersError && (
                <Typography>
                  Error accessing players data {`\n${error}`}
                </Typography>
              )}
              {playersLoading && <Typography>Loading...</Typography>}
              {playersData && (
                <nav aria-label="Team players">
                  <List>
                    {playersData.map((player) => (
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
          <Grid item xs={4}></Grid>
        </Grid>
      )}
    </div>
  );
};
export default TeamInfo;
