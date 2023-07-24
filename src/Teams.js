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

const Teams = () => {
  const teams = [
    {
      teamName: "Atlanta Hawks",
      hostCity: "Atlanta",
      id: 26,
    },
    {
      teamName: "Boston Celtics",
      hostCity: "Boston",
      id: 2,
    },
    {
      teamName: "Charlotte Hornets",
      hostCity: "Charlotte",
      id: 16,
    },
    {
      teamName: "Chicago Bulls",
      hostCity: "Chicago",
      id: 19,
    },
    {
      teamName: "Cleveland Cavaliers",
      hostCity: "Cleveland",
      id: 14,
    },
    {
      teamName: "Dallas Mavericks",
      hostCity: "Dallas",
      id: 9,
    },
    {
      teamName: "Denver Nuggets",
      hostCity: "Denver",
      id: 13,
    },
    {
      teamName: "Detroit Pistons",
      hostCity: "Detroit",
      id: 27,
    },
    {
      teamName: "Golden State Warriors",
      hostCity: "Golden State",
      id: 3,
    },
    {
      teamName: "Houston Rockets",
      hostCity: "Houston",
      id: 21,
    },
    {
      teamName: "Indiana Pacers",
      hostCity: "Indianapolis",
      id: 17,
    },
    {
      teamName: "Los Angeles Clippers",
      hostCity: "Los Angeles",
      id: 25,
    },
    {
      teamName: "Los Angeles Lakers",
      hostCity: "Los Angeles",
      id: 5,
    },
    {
      teamName: "Memphis Grizzlies",
      hostCity: "Memphis",
      id: 11,
    },
    {
      teamName: "Miami Heat",
      hostCity: "Miami",
      id: 7,
    },
    {
      teamName: "Milwaukee Bucks",
      hostCity: "Milwaukee",
      id: 4,
    },
    {
      teamName: "Minnesota Timberwolves",
      hostCity: "Minneapolis",
      id: 12,
    },
    {
      teamName: "New Orleans Pelicans",
      hostCity: "New Orleans",
      id: 15,
    },
    {
      teamName: "New York Knicks",
      hostCity: "New York",
      id: 20,
    },
    {
      teamName: "Oklahoma City Thunder",
      hostCity: "Oklahoma City",
      id: 22,
    },
    {
      teamName: "Orlando Magic",
      hostCity: "Orlando",
      id: 28,
    },
    {
      teamName: "Philadelphia 76ers",
      hostCity: "Philadelphia",
      id: 1,
    },
    {
      teamName: "Phoenix Suns",
      hostCity: "Phoenix",
      id: 10,
    },
    {
      teamName: "Portland Trail Blazers",
      hostCity: "Portland",
      id: 29,
    },
    {
      teamName: "Sacramento Kings",
      hostCity: "Sacramento",
      id: 24,
    },
    {
      teamName: "San Antonio Spurs",
      hostCity: "San Antonio",
      id: 30,
    },
    {
      teamName: "Toronto Raptors",
      hostCity: "Toronto",
      id: 8,
    },
    {
      teamName: "Utah Jazz",
      hostCity: "Salt Lake City",
      id: 23,
    },
    {
      teamName: "Washington Wizards",
      hostCity: "Washington, D.C.",
      id: 18,
    },
  ];

  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="Team players">
          <List>
            {teams.map((team) => (
              <ListItem key={teams.id}>
                <ListItemButton>
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
      </Box>
    </Grid>
  );
};

export default Teams;
