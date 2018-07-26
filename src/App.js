import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MenuAppBar from './MenuAppBar'
import NewPostWidget from './components/NewPostWidget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <NewPostWidget />
      </div>
    );
  }
}

export default App;
