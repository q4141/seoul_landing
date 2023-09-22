import React from "react";
import ReactDOM from "react-dom/client";
import "./main.module.css";
import HistoryScreen from "./assets/components/HistoryScreen/HistoryScreen";
import FirstScreen from "./assets/components/FirstScreen/FirstScreen";
import TravelScreen from "./assets/components/TravelScreen/TravelScreen";
import GalleryScreen from "./assets/components/GalleryScreen/GalleryScreen";
import ContactsScreen from "./assets/components/ContactsScreen/ContactsScreen";
import Calculator from "./assets/components/calculator/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator/>
    <FirstScreen />
    <HistoryScreen />
    <TravelScreen />
    <GalleryScreen />
    <ContactsScreen />
  </React.StrictMode>
);
