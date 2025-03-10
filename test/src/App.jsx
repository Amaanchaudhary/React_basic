import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PromiseComponent from "./Components/PromiseComponent";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/footer">Footer</Link>

        <NavLink
          to="/navbar"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Navbar
        </NavLink>

        <NavLink
          to="/promise"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Promise
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/footer" Component={Footer} />
        <Route path="/navbar" Component={Navbar} />
        <Route path="/promise" Component={PromiseComponent} />
      </Routes>
    </div>
  );
}

export default App;
