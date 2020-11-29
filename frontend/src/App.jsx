import React, { Component } from 'react'
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home.jsx';
import Index from './component/admin/index';
import Login from './component/admin/login';
import InputLogoPartner from './component/admin/inputLogoPartner';
import InputPortofolioFlyer from './component/admin/inputPortofolioFlyer';
import InputPortofolioYoutube from './component/admin/inputPortofolioYoutube';
import InputLogoClient from './component/admin/inputLogoClient';
import InputWeDo from './component/admin/inputWeDo.jsx';
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
          <Route path='/input-wedo' component={InputWeDo} />

          <Route path='/input-logo-partner' component={InputLogoPartner} />
          <Route path='/input-portofolio-flyer' component={InputPortofolioFlyer} />
          <Route path='/input-portofolio-youtube' component={InputPortofolioYoutube} />
          <Route path='/input-logo-client' component={InputLogoClient} />



        </Switch>
      </BrowserRouter>
    );
  }
}
