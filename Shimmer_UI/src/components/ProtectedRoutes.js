import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const isAuthenticate = true;
  return isAuthenticate? <Outlet/> : <Navigate to="/login" />
}
