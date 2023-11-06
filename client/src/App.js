import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

import Header from './pages/Header';
import SideBar from './pages/SideBar';
import Home from './pages/body/Home';
import Dashboard from './pages/body/Dashboard';
import UsersList from './pages/body/UsersList';
import Categories from './pages/body/Categories';

function App() {
  const {user} = useContext(AuthContext);
  
  return (

    <Routes>
      <Route path="/" element={<Home /> } />
      {/* <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to='/' replace/> } /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
