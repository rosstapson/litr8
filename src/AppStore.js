import {decorate, observable, configure, action} from "mobx"

configure({enforceActions: true})

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
  export default appStore