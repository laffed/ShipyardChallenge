import React from 'react';
import './App.css';
import {Routes} from './routes';
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind';
import {config} from '@state';

const overmind = createOvermind(config, {
  devtools: '192.168.1.66:3031'
})

function App() {
  return (
    <Provider value={overmind}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
