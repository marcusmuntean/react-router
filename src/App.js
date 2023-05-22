import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trivia from "./components/trivia";
import WeatherComponent from "./components/WeatherComponent";
import NewsComponent from "./components/NewsComponent";

function AppRouter() {
  return (
    <>
      <div className="App">
        <h1>React Router App</h1>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/weather" element={<WeatherComponent />} />
            <Route path="/news" element={<NewsComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default AppRouter;
