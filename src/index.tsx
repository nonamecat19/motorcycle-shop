import React from 'react';
import ReactDOM from 'react-dom/client';
import './index/index.scss';
import {App} from './components/App/App';
import reportWebVitals from './index/reportWebVitals';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
