import React from 'react';
import Dashboard from "../src/pages/Dashboard"
import Login from "../src/pages/Login"
import Error from "../src/pages/Error"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>

  );
}

export default App;
