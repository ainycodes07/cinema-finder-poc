import { Grid, Paper, Typography, Box } from "@mui/material";
import Layout from "./components/Layout";
import Map from "./components/Map";
import AsideIndex from "./components/AsideIndex";
import {
  FranchiseCinemasList,
  NearbyCinemasList
} from "./components/CinemaList";
import { Switch, Route } from "react-router-dom";
import Provider from "./components/Provider";
import loadable from "@loadable/component";

// Upgraded 404 component with movie-theater styling
const NotFound = () => (
  <Box sx={{ textAlign: "center", py: 4, px: 2 }}>
    <Typography variant="h4" sx={{ color: "#e50914", fontWeight: "bold", mb: 1 }}>
      404
    </Typography>
    <Typography variant="h6" sx={{ color: "#ffffff", mb: 1 }}>
      Page Not Found
    </Typography>
    <Typography variant="body2" sx={{ color: "#aaaaaa" }}>
      The cinema page or feature you are looking for does not exist.
    </Typography>
  </Box>
);

const CinemaMarkers = loadable(() => import("./components/CinemaMarkers"));
const NearbyCinemaMarkers = loadable(() =>
  import("./components/NearbyCinemaMarkers")
);

const App = () => (
  <Provider>
    <Layout>
      {/* Box with component="main" fixes the Lighthouse landmark accessibility error */}
        <Box component="main" sx={{ width: "100%" }}>
          <Grid container spacing={2}>
          <Grid item xs={12} md={8} sx={{ minHeight: 400 }}>
            <Map>
              <Switch>
                <Route exact path="/">
                  <CinemaMarkers />
                </Route>
                <Route path="/nearby" component={NearbyCinemaMarkers} />
                <Route
                  path="/:franchiseId/:countryCode"
                  component={CinemaMarkers}
                />
              </Switch>
            </Map>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Dark mode paper container for the cinema sidebar list */}
            <Paper 
              elevation={4}
              sx={{
                p: 2,
                backgroundColor: "#1a1a1a",color: "#ffffff", 
                borderRadius: 3,
                border: "1px solid #2d2d2d"
              }}
            >
              <Switch>
                <Route exact path="/" component={AsideIndex} />
                <Route path="/nearby" component={NearbyCinemasList} />
                <Route
                  path="/:franchiseId/:countryCode"
                  component={FranchiseCinemasList}
                />
                <Route path="*" component={NotFound} />
              </Switch>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  </Provider>
);

export default App;
