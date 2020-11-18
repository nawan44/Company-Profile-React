import React, { Component } from 'react'
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home.jsx';
import Index from './component/admin/index';
import Login from './component/admin/login';
import InputPartner from './component/admin/inputPartner';
import InputPortofolio from './component/admin/inputPortofolio';
import InputYoutube from './component/admin/inputYoutube';
import InputClient from './component/admin/inputClient';

import DataPt from './component/admin/dataPt';
import InputAbout from './component/admin/inputAbout';


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
          <Route path='/input-about' component={InputAbout} />

          <Route path='/input-partner' component={InputPartner} />
          <Route path='/input-portofolio' component={InputPortofolio} />
          <Route path='/input-youtube' component={InputYoutube} />
          <Route path='/input-client' component={InputClient} />



        </Switch>
      </BrowserRouter>
    );
  }
}
