// ──────────────────────────────────────────────
// main.jsx — Application entry point
// Renders the React app and imports global styles.
// ──────────────────────────────────────────────

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Import global SCSS reset and base styles
import './styles/_globals.scss';
// Import theme provider
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter enables client-side routing */}
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
