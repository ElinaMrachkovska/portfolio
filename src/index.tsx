import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Імпортуємо тут
import { App } from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Тепер весь додаток всередині Роутера */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);