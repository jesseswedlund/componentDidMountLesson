import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

const tick = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
  console.log("Re-Rendering the entire App!")
}

setInterval(tick, 1000)
