import React, { Component } from 'react'
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home.jsx';
import Index from './component/admin/index';
import Login from './component/admin/login';
import EntryPartner from './component/admin/entryPartner';
import EntryPortofolio from './component/admin/entryPortofolio';
import EntryYoutube from './component/admin/entryYoutube';
import EntryClient from './component/admin/entryClient';

import DataPt from './component/admin/dataPt';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/admin' component={Index} />
          <Route path='/login' component={Login} />

          <Route path='/data-pt' component={DataPt} />
          <Route path='/entry-partner' component={EntryPartner} />
          <Route path='/entry-portofolio' component={EntryPortofolio} />
          <Route path='/entry-youtube' component={EntryYoutube} />
          <Route path='/entry-client' component={EntryClient} />



        </Switch>
      </BrowserRouter>
    );
  }
}
