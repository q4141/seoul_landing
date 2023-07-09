import React from "react";
import FirstScreen from "./FirstScreen/FirstScreen";
import HistoryScreen from "./HistoryScreen/HistoryScreen";
import TravelScreen from "./TravelScreen/TravelScreen";
import GalleryScreen from "./GalleryScreen/GalleryScreen";
import ContactsScreen from "./ContactsScreen/ContactsScreen";

const App = () => {
  return (
    <div>
      <FirstScreen />
      <HistoryScreen />
      <TravelScreen />
      <GalleryScreen />
      <ContactsScreen />
    </div>
  );
};

export default App;
