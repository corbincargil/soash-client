import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { PrimaryRoutes } from "./routes/PrimaryRoutes";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<PrimaryRoutes />} />
      </Routes>
    </>
  );
}

export default App;
