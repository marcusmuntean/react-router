import "./../App.css";
import { useState, React, useEffect } from "react";
import process from "process";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

function NewsComponent() {
  return (
    <>
      <News />
    </>
  );
}

function News() {
  let url = new URL("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json");
  const API_Key = process.env.REACT_APP_api_news;
  const [newsObj, setNewsObj] = useState([{}]);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    url.searchParams.delete("api-key");
    url.searchParams.append("api-key", API_Key);

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setNewsObj(data.results);
        setRendered(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {Object.keys(newsObj).map((num) =>
        num < 5 ? (
          <div className="App">
            <Article number={num} obj={newsObj[num]} rendered={rendered} />
            <Divider />
          </div>
        ) : (
          console.log()
        )
      )}
    </>
  );
}
let mediaMetadata = "media-metadata";

function Article(props) {
  return (
    <>
      <Grid>
        <h2>{props.obj.title}</h2>
        <p>{props.obj.abstract}</p>
        <p>
          <i>{props.obj.byline}</i>
        </p>

        {props.rendered ? (
          <img alt="News" src={props.obj.media[0][mediaMetadata][2].url}></img>
        ) : (
          console.log()
        )}

        <p>
          Source:{" "}
          <a href="/" style={{ cursor: "pointer" }}>
            {props.obj.url}
          </a>
        </p>
      </Grid>
    </>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default NewsComponent;
