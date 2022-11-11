import React from "react";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
