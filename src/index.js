import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { getPokemons } from './redux/actions/pokemons'
import store from './redux/store'
import './styles/index.css';
import App from './components/App';

store.dispatch(getPokemons())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
