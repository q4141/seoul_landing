import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import App from "../App";
import App2 from "../App2";
import App3 from "../App3";
import App4 from "../App4";
import App5 from "../App5";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import MinesForm from "./Mines/AddMinesForm/MinesForm";
import GrenadeForm from "./Grenades/AddGrenadesForm/GrenadeForm";
import ProjectileForm from "./Projectile/AddProjectileForm/ProjectileForm";
import RocketsForm from "./Rockets/AddRocketsForm/RocketsForm";
import DataFromMessage from "./DataFromMessage/DataFromMessage";
import DataFromShownMessage from "./DataFromMessage/DataFromShownMessage";
import passwordForAdmin from "../Password";


const Router = () => {
 
 
  
    <BrowserRouter>
      <Routes>
        <Route element={<main.jsx />} path="/" />
       
      </Routes>
    </BrowserRouter>
  
};

export default Router;
