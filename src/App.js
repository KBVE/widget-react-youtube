//*      [React]:[Application]
import React from "react";

//*       @mui Theme
import { createTheme, ThemeProvider } from "@mui/material/styles";

//*       Import @mui
//*       @mui/material
import Grid from "@mui/material/Grid";
//import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
//import Modal from '@mui/material/Modal';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Masonry from "@mui/lab/Masonry";

//*       YT
import ReactVideo from "./ReactVideo";

function App({ kbve_dom_element }) {
  const _url = kbve_dom_element.getAttribute("url");

  const [error, setError] = React.useState("");


  const prefersDarkMode = true;

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );


  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Paper item>
            <Card>
              {!error && (
                <CardMedia
                  sx=".player-wrapper {
                      width: auto;
                      height: auto;
                    }
                    .react-player {
                      padding-top: 56.25%;
                      position: relative;
                    }
                    
                    .react-player > div {
                      position: absolute;
                    }"
                >
                  {ReactVideo(_url)}
                </CardMedia>
              )}
              <Divider />
              <CardActions sx={{ justifyContent: "center" }}>
                <Button variant="contained" sx={{ m: 1 }} size="small">
                  KBVE
                </Button>
                <Button variant="contained" sx={{ m: 1 }} size="small">
                  Share
                </Button>
                <Button variant="contained" sx={{ m: 1 }} size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
