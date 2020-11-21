import React from 'react';
import './css/youtube.css';
import { Card, } from 'reactstrap';


class Youtube extends React.Component {
    render() {
        return (
            <div className="youtube" >
                <div className="container text-center wow fadeIn">
                    <h1 className="h1youtube">Youtube</h1>
                    <hr className="hrred" />
                    <p>Here are some youtube video that we've worked on.</p>
                    <br />
                    <div className="row content-row ">
                        <div className="col-lg-12">
                            <div className="portfolio-filter">
                                <ul id="filters" className="clearfix">
                                    <li>
                                        <span className="filter active" data-filter="identity graphic event brand tvc">All</span>
                                    </li>
                                    <li>
                                        <span className="filter" data-filter="identity">Digital Campaign</span>
                                    </li>
                                    <li>
                                        <span className="filter" data-filter="graphic">Film Promo</span>
                                    </li>
                                    <li>
                                        <span className="filter" data-filter="event">Events</span>
                                    </li>
                                    <li>
                                        <span className="filter" data-filter="brand">Brand Activation</span>
                                    </li>
                                    <li>
                                        <span className="filter" data-filter="tvc">TVC</span>
                                    </li>
                                </ul>
                            </div>
                            <Card className="cardYoutube">
                                <iframe src="https://www.youtube.com/embed/laTt5qozFnE" frameborder="0" allowfullscreen></iframe>
                            </Card>
                            <Card className="cardYoutube">
                                <iframe src="https://www.youtube.com/embed/bccKeuJpkjs" frameborder="0" allowfullscreen></iframe>
                            </Card>
                            <Card className="cardYoutube">
                                <iframe src="https://www.youtube.com/embed/JgmhiQr8-Kk" frameborder="0" allowfullscreen></iframe>
                            </Card>
                            <Card className="cardYoutube">
                                <iframe src="https://www.youtube.com/embed/zcycoTRj_nQ" frameborder="0" allowfullscreen></iframe>
                            </Card>

                            <Card className="cardYoutube">
                                <iframe src="https://www.youtube.com/embed/o9Qn6ZYyPZI" frameborder="0" allowfullscreen></iframe>
                            </Card>
                            <Card className="cardYoutube">
                                <iframe src="https://www.youtube.com/embed/_16bfe5K_PE" frameborder="0" allowfullscreen></iframe>
                            </Card>
                            <Card className="cardYoutube">
                                <iframe src="https://www.youtube.com/embed/VDz7QxpAYhc" frameborder="0" allowfullscreen></iframe>
                            </Card>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default Youtube;