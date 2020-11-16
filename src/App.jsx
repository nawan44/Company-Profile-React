import React, { Component } from 'react'
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/header.jsx';
import Admin from './component/admin/admin'
import Login from './component/admin/login';
import InputProduk from './component/admin/inputProduk';
import InputPaket from './component/admin/inputPaket';
import DaftarPesanan from './component/admin/daftarPesanan';
import RekapPesanan from './component/admin/rekapPesanan';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/' component={Header} />
          <Route path='/home' component={Header} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Route path='/input-produk' component={InputProduk} />
          <Route path='/input-paket' component={InputPaket} />
          <Route path='/daftar-pesanan' component={DaftarPesanan} />
          <Route path='/rekap-pesanan' component={RekapPesanan} />

        </Switch>
      </BrowserRouter>
    );
  }
}
