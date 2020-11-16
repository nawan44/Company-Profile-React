import Header from './component/header.jsx';
import Navmenu from './component/navmenu.jsx';
import About from './component/about.jsx';
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
import MediaPartner from './component/mediaPartner.jsx';
import OurWork from './component/ourWork.jsx';
import WeDo from './component/weDo.jsx';
import Carousely from './component/carousel.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Navmenu />
    <Header />
    <App />
    <About />
    <WeDo />
    <MediaPartner />
    {/* <OurWork /> */}
    <Carousely />
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
