import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PromiseComponent from "./Components/PromiseComponent";
import Error from "./Components/Error";
import axios from "axios";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

function App() {

  const [data , setData] = useState([])

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "type", headerName: "USER TYPE", width: 130 },
    { field: "login", headerName: "User Name", width: 130 },
  ];

  const paginationModel = { page: 0, pageSize: 100 };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.github.com/users");
      if(response){
        setData(response.data)
      }
      else{
        setData([])
      }
    };

    fetchData();
  }, []);

  const rows = data || []

  console.log(rows);
  

  return (
    <div>
      {/* <nav>
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
        <Route path="*" Component={Homepage}/>
      </Routes> */}

      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}

export default App;
