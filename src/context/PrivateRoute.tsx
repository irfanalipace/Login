// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.tsx';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useAuth();

  return (
    state.isAuthenticated ? (
      <Route {...rest} element={<Component {...rest} />} />
    ) : (
      <Navigate to="/login" />
    )
  );
};

export default PrivateRoute;
