import React from 'react';
import logo from './jfann-logo.jpg';
import Player from './Player.js';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="Player-wrapper">
                <Player/>
            </div>
        </div>
    );
}

export default App;
