import { createStore, applyMiddleware } from 'redux';
import asyncDispatchMiddleware from "async-dispatch";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, 
    applyMiddleware(thunk,asyncDispatchMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById("root")
);