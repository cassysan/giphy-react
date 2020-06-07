import React from 'react';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene"></div>
    </div>
  );
}

export default App;
