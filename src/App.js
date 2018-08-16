import React, { Component } from 'react';
//import {decorate, observable, configure, action} from "mobx"
import {observer} from "mobx-react"
import './App.css';
import MenuAppBar from './MenuAppBar'
import NewPostWidget from './components/NewPostWidget';
import Login from './components/Login';
import appStore from './AppStore';


class App extends Component {
  render() {
    if (appStore.user === '' || !appStore.user) {
      return(
        <Login store={appStore} />
      )
    }
    return (
      <div className="App">
        <MenuAppBar store={appStore} />
        <NewPostWidget store={appStore} />         
      </div>
    );
  }
}
App = observer(App);
export default App;
