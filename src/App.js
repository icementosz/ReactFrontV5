import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { SidebarProvider } from './Component/sidebarcontext'
import Sidebar from './Component/sidebar';
import Dashboard from './Page/Dashboard';
import Manageuser from './Page/Manageuser';
import Medicalhistory from './Page/Medicalhistory';
import Personainfo from './Page/Personainfo';

function App() {


  return (
    <div className="App">
      <Router>
        <SidebarProvider>
          <Sidebar />
          <Routes>
            <Route exact path="/Medicalhistory" element={<Medicalhistory />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/ManageUser" element={<Manageuser />} />
            <Route exact path="/Personainfo" element={<Personainfo />} />
          </Routes>
        </SidebarProvider>
      </Router>
    </div>
  );
}

export default App;
