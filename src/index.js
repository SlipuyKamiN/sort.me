import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ParcelsProvider } from 'context/ParcelsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParcelsProvider>
      <BrowserRouter basename="/sort.me">
        <App />
      </BrowserRouter>
    </ParcelsProvider>
  </React.StrictMode>
);
