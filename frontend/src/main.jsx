import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home.jsx';
import SetPage from './pages/SetPage.jsx';
import Picture from './pages/Picture.jsx';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route index={true} path="/home" element={<Home />} />
      <Route path="/:setid" element={<SetPage />} />
      <Route path="/:setid/:picid" element={<Picture />} />
    </Routes>
  </BrowserRouter>
)
