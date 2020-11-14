import React from 'react';
import './css/about.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <section id="about">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12 wow fadeIn">
                                <h1 className="h1about">About</h1>
                                <p>RSmartComm Key to Success</p>
                                <hr className="hrred" />
                            </div>
                        </div>
                        <div className="row text-center content-row">
                            <p >
                                <h5>
                                    Integrated Marketing Communication Services, Digital Solution, Event Services, Public Relation, Media Placement, Media Activities, Integrated Film Production,
                                    Brand Activities and Leverage of Sales
                                    </h5>

                            </p>
                            <p >
                                <h5>
                                    Doing business is not only doing sales, but in the same time several stages should be prepared by organization who have some requirement in delivering the campaign, for various purposes ( such as Brand Activation, create demand, maintain awareness, etc). In some cases, companies have known on which part they should do in terms of marketing activities. However, they still got fail in communicating the messages to their target audiences/ segments/market. Therefore we are here will provide you the ”Integrated Marketing Communication Services” with consistent brand messaging across both traditional and non traditional marketing channels and using different promotional methods to reinforce each other.

                                    </h5>
                            </p>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;