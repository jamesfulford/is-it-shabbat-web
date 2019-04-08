import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Copyright from './components/Copyright';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Copyright />, document.getElementById('copyright'));
serviceWorker.register();
