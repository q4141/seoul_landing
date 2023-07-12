import React from "react";
import ReactDOM from "react-dom/client";
import "./main.module.css";
import Router from "./assets/components/Router.jsx";
import HistoryScreen from "./assets/components/HistoryScreen/HistoryScreen";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <HistoryScreen/>
  </React.StrictMode>
);
