import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route exact path="/footer" Component={Footer} />
        <Route exact strict path="/navbar" Component={Navbar}/>
      </Routes>
    </div>
  );
}

export default App;
