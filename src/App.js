import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import CheckStatus from './CheckStatus';
import SuperAdminPage from './SuperAdminPage';

import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/checkstatus" element={<CheckStatus />} />
      <Route path="/superadmin" element={<SuperAdminPage />} />
    </Routes>
  </Router>
);

export default App;