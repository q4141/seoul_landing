import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import App from "../components/App.jsx";


const Router = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
       
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
