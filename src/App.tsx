import React from 'react';
import { Dashboard, Login, Error, PrivateRoute } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <PrivateRoute>
          <Route path="/" element={<Dashboard />} />
        </PrivateRoute>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>

  );
}

export default App;
