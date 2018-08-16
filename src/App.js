import React, { Component } from 'react';
import {decorate, observable, configure, action} from "mobx"
import {observer} from "mobx-react"
import './App.css';
import MenuAppBar from './MenuAppBar'
import NewPostWidget from './components/NewPostWidget';
import Login from './components/Login';

class Store {
  user = '';
  token = '';
  login(user) {
    this.user = user;
  }
  logout() {
    this.user = '';
  }
}

decorate(Store, {
  user: observable,
  token: observable,
  login: action,
  logout: action
})

const appStore = new Store()
configure({enforceActions: true})

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
