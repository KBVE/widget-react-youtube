//*      [React]:[Application]
import React from "react";

//*       @mui Theme
import { createTheme, ThemeProvider } from "@mui/material/styles";

//*       Import @mui
//*       @mui/material
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
import YT from './YT';

function App({kbve_dom_element}) {
  const _yt = kbve_dom_element.getAttribute("yt-id");
  const _ytJSON = kbve_dom_element.getAttribute("yt-json");

  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState([]);

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

  function renderPost(post) {
    const {
      data: { title, id, description, img, author_name },
    } = post;
    return (
      <Paper item xs={4} key={id}>
        <Card>
         {title}
        </Card>
      </Paper>
    );
  }

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${_yt}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        //console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError("error fetching from YT");
      });
  }, [_yt, _ytJSON]);

  
// function noDraft(post) {  return !post.data.draft;  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card>
          {_yt}
        </Card>
       
        <Grid fluid="md">
          {loading && "Loading..."}
          {error && error}
          {!!data.length && (
            
            <Divider>{data.map(renderPost)}</Divider>
          )}
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
