import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstScreen from './assets/components/FirstScreen/FirstScreen.jsx'
import  './main.module.css'
import HistoryScreen from './assets/components/HistoryScreen/HistoryScreen.jsx'
import TravelScreen from './assets/components/TravelScreen/TravelScreen.jsx'
import GalleryScreen from './assets/components/GalleryScreen/GalleryScreen.jsx'
import ContactsScreen from './assets/components/ContactsScreen/ContactsScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstScreen />
    <HistoryScreen/>
    <TravelScreen/>
    <GalleryScreen/>
    <ContactsScreen/>
  </React.StrictMode>,
)
