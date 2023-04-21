import './styles/globals.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/page';
import ReminderPage from './pages/reminder/page';
import RootLayout from './pages/layout';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />} path="/">
          <Route element={<HomePage />} path="/" />
          <Route element={<ReminderPage />} path="/reminder" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
reportWebVitals();
