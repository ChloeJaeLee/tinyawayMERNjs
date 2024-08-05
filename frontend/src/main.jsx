import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import AnnouncementBar from './components/shared/announcementbar/AnnouncementBar.jsx';
import Navbar from './components/shared/navbar/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AnnouncementBar />
      <Navbar />
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
