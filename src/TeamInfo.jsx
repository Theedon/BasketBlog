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
import styles from "./PlayerInfo.module.css";

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
    <div className={styles.playerInfoContainer}>
      {loading && <Typography variant="h2">Loading...</Typography>}
      {error && (
        <Typography variant="h2">Error retrieving team data</Typography>
      )}
      {data && (
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} className={styles.playerInfoGrid}>
            <Typography variant="h5" gutterBottom>
              Team Wiki:
            </Typography>

            <Typography variant="h6" gutterBottom>
              {data.info}
            </Typography>
          </Grid>

          <Grid
            item
            className={styles.playerInfoGrid}
            sx={{ marginLeft: "2px" }}
          >
            {playersError && (
              <Typography>
                Error accessing players data {`\n${error}`}
              </Typography>
            )}
            {playersLoading && <Typography>Loading...</Typography>}
            {playersData && (
              <nav aria-label="Team players">
                <Typography variant="h5" gutterBottom>
                  Players List
                </Typography>
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
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default TeamInfo;
