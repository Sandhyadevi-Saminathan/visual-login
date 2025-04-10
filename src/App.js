import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ForgotPassword from './components/ForgotPassword'; // Create this page
import ResetLink from './components/ResetLink';
import NewPasswordForm from './components/NewPasswordForm';
import PasswordChanged from './components/PasswordChanged';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-link" element={<ResetLink />} />
          <Route path="/reset-password" element={<NewPasswordForm />} />
          <Route path="/password-changed" element={<PasswordChanged />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
