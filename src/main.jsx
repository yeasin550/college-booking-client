import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import * as ReactDOM from "react-dom/client";
import {RouterProvider } from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
