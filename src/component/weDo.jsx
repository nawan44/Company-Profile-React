import React from 'react';
import './css/we-do.css';
import gbr1 from './img/wedo/1.png';
import gbr2 from './img/wedo/2.png';
import gbr3 from './img/wedo/3.png';



class WeDo extends React.Component {
    render() {
        return (
            <div id="services" >
                <section id="process" className="services" >
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12 wow fadeIn">
                                <h1 className="h1wedo">What We Do</h1>
                                <hr className="hrred" />
                                <p>Our Core in Integrated Marketing Services :</p>
                            </div>
                        </div>
                        <div className="row content-row">
                            <p>
                                <div className="col-md-4 wow fadeIn" data-wow-delay=".4s">
                                    <div className="media">
                                        <img src={gbr1} className="iconwe" />
                                        <div className="media-body">
                                            <h3 className="media-heading">1</h3>
                                            <ul>
                                                <li className="liwe">Marketing Communication</li>
                                                <li className="liwe">Event Services</li>
                                                <li className="liwe">Digital Solution</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </p>
                            <p>
                                <div className="col-md-4 wow fadeIn" data-wow-delay=".6s">
                                    <div className="media">
                                        <img src={gbr2} className="iconwe" />                                        <div className="media-body">
                                            <h3 className="media-heading">2</h3>
                                            <ul>
                                                <li className="liwe">Media Placement</li>
                                                <li className="liwe">Public Relations</li>
                                                <li className="liwe">Sales Leverage</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </p>
                            <p>
                                <div className="col-md-4 wow fadeIn" data-wow-delay=".8s">
                                    <div className="media">
                                        <img src={gbr3} className="iconwe" />

                                        <div className="media-body">
                                            <h3 className="media-heading">3</h3>
                                            <ul>
                                                <li className="liwe">Media Activities</li>
                                                <li className="liwe">Brand Activation</li>
                                                <li className="liwe">Integrated Film Solution</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </p>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WeDo;