import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import TableItem from "./component/table/tableItem";
import Home from "./component/homepage/home";
import Provider from "./component/panel/provider";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aws" element={<Provider type="aws" />}></Route>
          <Route path="/azure" element={<Provider type="azure" />}></Route>
          <Route path="/google" element={<Provider type="google" />}></Route>
          <Route path="/provider/:ip" element={<TableItem />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
