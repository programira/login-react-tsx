import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello/Hello';
import HelloComponent from './components/Hello/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComponent/>
      </header>
    </div>
  );
}

export default App;
