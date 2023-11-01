import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

import Header from './pages/Header';
import SideBar from './pages/SideBar';
import Home from './pages/body/Home';
import Dashboard from './pages/body/Dashboard';

function App() {
  const {user} = useContext(AuthContext);
  
  return (

    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to='/' replace/> } />
    </Routes>
  );
}

export default App;
