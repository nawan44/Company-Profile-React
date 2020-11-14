import React from 'react';
import './css/clients.css';
import c1 from './img/client-logos/c1.png';
import c2 from './img/client-logos/c2.png';
import c3 from './img/client-logos/c3.png';
import c4 from './img/client-logos/c4.png';
import c5 from './img/client-logos/c5.png';


class OurClients extends React.Component {
    render() {
        return (
            <div className="services bg-gray">
                <div className="container">
                    <h1 className="h1clients" >OUR CLIENTS</h1>
                    <hr className="hrred" />
                    <p >Here are some our clients that we've worked on :</p>
                    <br />

                    <div className="row content-row">
                        <div className="col-lg-12">
                            <div className="about-carousel">
                                <div className="item">
                                    <img src={c1} className="img-responsive" />
                                </div>
                                <div className="item">
                                    <img src={c2} className="img-responsive" />
                                </div>
                                <div className="item">
                                    <img src={c3} className="img-responsive" />
                                </div>
                                <div className="item">
                                    <img src={c4} className="img-responsive" />
                                </div>
                                <div className="item">
                                    <img src={c5} className="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurClients;