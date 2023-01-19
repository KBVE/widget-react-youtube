
import React from "react";

function App({kbve_dom_element}) {
  const _yt = kbve_dom_element.getAttribute("yt-id");
  const _ytJSON = kbve_dom_element.getAttribute("yt-json");

  const [youtubeId, setYoutubeId] = React.useState();
  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${_yt}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        //setYoutubeId(data.slice(0, _limit));
        setYoutubeId(data);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError("error fetching from YT");
      });
  }, [_yt, _ytJSON]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {youtubeId}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
