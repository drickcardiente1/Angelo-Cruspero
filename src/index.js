import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './assets/utils/reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/sass/custom_design.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
reportWebVitals();
