import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { ToastProvider } from './components/toastMessage/toast';
import { SpinnerProvider } from './components/spinner/spinner';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <SpinnerProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
  </SpinnerProvider>
);