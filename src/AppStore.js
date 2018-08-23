import {decorate, observable, configure, action} from "mobx";
import axios from 'axios';
import { apiUri } from './config';

configure({enforceActions: true})

class Store {
  constructor(props) {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';      
    this.api = axios.create({
        baseURL: apiUri
    })
    this.user = '';
    this.token = '';
  }
    
    login(user) {
      this.user = user;
    }
    logout() {
      this.user = '';
    }
    getUsers() {
      return this.api.get('/users');
    }
    getPosts() {
      return this.api.get('/posts');
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