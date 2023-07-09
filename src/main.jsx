import React from "react";
import ReactDOM from "react-dom/client";
import FirstScreen from "./assets/components/FirstScreen/FirstScreen.jsx";
import "./main.module.css";
import HistoryScreen from "./assets/components/HistoryScreen/HistoryScreen.jsx";
import TravelScreen from "./assets/components/TravelScreen/TravelScreen.jsx";
import GalleryScreen from "./assets/components/GalleryScreen/GalleryScreen.jsx";

import App from "./assets/components/App.jsx";

import Router from './assets/components/Router.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);