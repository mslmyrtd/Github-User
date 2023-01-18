import React, { Fragment } from 'react';
import { Dashboard, Login, Error, PrivateRoute, AuthWrapper } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Fragment>
          <Routes>
            <Route path='/' element={<PrivateRoute />}>
              <Route path='/' element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Fragment>

      </Router>
    </AuthWrapper>
  );
}

export default App;
