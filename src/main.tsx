import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { ToastProvider } from './components/toastMessage/toast';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ToastProvider>
    <App />
  </ToastProvider>
);