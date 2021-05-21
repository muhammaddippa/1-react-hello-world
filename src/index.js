import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducer/globalReducer'

//store
const bagigoStore = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={bagigoStore}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
