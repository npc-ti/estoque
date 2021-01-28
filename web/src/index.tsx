import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './public/styles/GlobalStyles';
import reportWebVitals from './reportWebVitals';
// import './public/styles/styles.css'
import ApplicationRoutes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ApplicationRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);

