import { Grid, Box, Typography } from "@mui/material";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const TeamInfo = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/teams/${id}`;
  const { data, loading, error } = useFetch(url);

  return (
    <div class="blog">
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
            <Box>{/* have list of players here */}</Box>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      )}
    </div>
  );
};
export default TeamInfo;
