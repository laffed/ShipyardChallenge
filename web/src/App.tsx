import React, {MouseEvent} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {sy_logo} from './assets'
import {Routes} from './routes';
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind';
import {Router} from 'react-router';
import {createBrowserHistory, History} from 'history';
import {config} from '@state';

const history: History = createBrowserHistory();
const overmind = createOvermind(config
  // Uncomment for development
  // , { devtools: '192.168.1.66:3031' }
);

const handleHomeClick = (e: MouseEvent) => {
  e.preventDefault();
  history.push('/');
}

function App() {
  return (
    <Provider value={overmind}>
      <div className="App">
        <div className='parent'>
          <div className="top">
            <img onClick={handleHomeClick} src={sy_logo} alt="Shipyard" className='logo' />
          </div>
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
