import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  cash: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return {
        ...state, cash: state.cash + action.payload
      }
    case 'SUB_CASH':
      return { ...state, cash: state.cash - action.payload }

    default:
      return state
  }
}


const store = createStore(reducer)




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);