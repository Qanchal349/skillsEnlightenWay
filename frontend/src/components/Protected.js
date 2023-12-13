import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = ({isAuthenticated=false}) => {

  
    return (
      (isAuthenticated) ? <Outlet/> : <Navigate to="/login" replace />
    );
}

export default Protected