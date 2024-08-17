import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Signup } from "./containers/Signup";
import { Home } from "./containers/Home";
import { NotFound } from "./containers/NotFound";
import { Root } from "./containers/Root";

function App() {
  return (
    <BrowserRouter basename={"/twitter_clone_react"}>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
