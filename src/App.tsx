import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import NurseDetail from './pages/nurses/NurseDetail';

import './public';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/nurses/:id" element={<NurseDetail/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
