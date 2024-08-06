import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '@/styles/index.css';

import anamnesisMock from './mocks/anamnesis.tsx';
import router from './router/index.tsx';

localStorage.setItem('anamnesis', JSON.stringify(anamnesisMock()));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
