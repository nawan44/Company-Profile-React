import React, { Component } from 'react'
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home.jsx';
import Index from './component/admin/index';
import Login from './component/admin/login';
import EntryPartner from './component/admin/entryPartner';
import EntryPortofolio from './component/admin/entryPortofolio';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/admin' component={Index} />
          <Route path='/login' component={Login} />

          <Route path='/entry-partner' component={EntryPartner} />
          <Route path='/entry-portofolio' component={EntryPortofolio} />



        </Switch>
      </BrowserRouter>
    );
  }
}
