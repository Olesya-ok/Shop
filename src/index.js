import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store/store';
import App from './App';
import './index.css';
import './Api/firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

        <Provider store={store}>
            <BrowserRouter  basename="/Shop">
                <App />
            </BrowserRouter>
        </Provider>

);

