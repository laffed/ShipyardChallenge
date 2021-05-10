import React from 'react';
import './App.css';
import {Routes} from './routes';
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {config} from '@state';

const history = createBrowserHistory();
const overmind = createOvermind(config, {
  devtools: '192.168.1.66:3031'
})

function App() {
  return (
    <Provider value={overmind}>
      <div className="App">
        <div className='parent'>
          <h1>Shipyard</h1>
        </div>
        <div className="content">
          <Router history={history}>
            <Routes />
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
