import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/global.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import ContextContiner from './context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ContextContiner>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ContextContiner>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
