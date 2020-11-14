import Header from './component/header.jsx';
import Navmenu from './component/navmenu.jsx';
import Content from './component/content.jsx';
import Footer from './component/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './component/contact.jsx';
import OurClients from './component/ourClients.jsx';
import Youtube from './component/youtube.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Navmenu />
    {/* <Header /> */}
    {/* <Carousely /> */}
    {/* <App /> */}

    <Content />
    <Youtube />
    <OurClients />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
