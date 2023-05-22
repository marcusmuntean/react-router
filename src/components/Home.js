import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <Link to="/trivia">Trivia</Link>
      <p></p>
      <Link to="/weather">Weather</Link>
      <p></p>
      <Link to="/News">News</Link>
    </nav>
  );
}

export default Home;
