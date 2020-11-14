import React from 'react';
import './css/we-do.css';
import port1 from './img/portfolio/port1.jpg';



class WeDo extends React.Component {
    render() {
        return (
            <div >
                <section id="process" class="services" >
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-lg-12 wow fadeIn">
                                <h1 className="h1wedo">What We Do</h1>
                                <hr className="hrred" />
                                <p>Our Core in Integrated Marketing Services :</p>
                            </div>
                        </div>
                        <div class="row content-row">
                            <div class="col-md-4 wow fadeIn" data-wow-delay=".4s">
                                <div class="media">
                                    <div class="pull-left">
                                        <i class="fa fa-clipboard"></i>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="media-heading">1</h3>
                                        <ul>
                                            <li>Marketing Communication</li>
                                            <li>Event Services</li>
                                            <li>Digital Solution</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeIn" data-wow-delay=".6s">
                                <div class="media">
                                    <div class="pull-left">
                                        <i class="fa fa-pencil"></i>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="media-heading">2</h3>
                                        <ul>
                                            <li>Media Placement</li>
                                            <li>Public Relations</li>
                                            <li>Sales Leverage</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeIn" data-wow-delay=".8s">
                                <div class="media">
                                    <div class="pull-left">
                                        <i class="fa fa-rocket"></i>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="media-heading">3</h3>
                                        <ul>
                                            <li>Media Activities</li>
                                            <li>Brand Activation</li>
                                            <li>Integrated Film Solution</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WeDo;