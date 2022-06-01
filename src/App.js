import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import TableBody from "./component/table/tableBody";
import TableItem from "./component/table/tableItem";
import Home from "./component/homepage/home";
import Aws from "./component/panel/aws";
import Azure from "./component/panel/azure";
import Google from "./component/panel/google";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aws" element={<Aws />}></Route>
          <Route path="/azure" element={<Azure />}></Route>
          <Route path="/google" element={<Google />}></Route>
          <Route path="/aws/tableBody" element={<TableBody />}></Route>
          <Route path="/aws/tableBody/tableItem" element={<TableItem />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
