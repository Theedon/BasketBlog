import { Grid, Box, Typography } from "@mui/material";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const TeamInfo = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/teams/${id}`;
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <Typography variant="h3">Loading...</Typography>}
      {error && (
        <Typography variant="h3">Error retrieving team data</Typography>
      )}
      {data && (
        <Grid className="blogInfo" justifyContent="center">
          <Grid item>
            <Typography variant="h5" gutterBottom>
              {data.info}
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: 5 }}>
            <Typography variant="h2">Player List</Typography>
            <Box>{/* have list of players here */}</Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default TeamInfo;
