import React from 'react';
import './css/media-partner.css';
import media1 from './img/people/1.png';
import media2 from './img/people/2.png';
import media3 from './img/people/3.png';
import media4 from './img/people/4.png';


class MediaPartner extends React.Component {
    render() {
        return (
            <div className="services bg-gray">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-lg-12 wow fadeIn">
                            <h1 className="h1contact" >Media Partner</h1>
                            <hr className="hrred" />
                            <p>We are using a Digital Marketing Strategy, WOM on communities and cooperation with some Media Partner from :</p>
                        </div>
                    </div>
                    <div class="row content-row">
                        <div class="col-lg-12">
                            <div class="about-carousel">
                                <div class="item">
                                    <img src={media1} class="img-responsive" />
                                </div>
                                <div class="item">
                                    <img src={media2} class="img-responsive" />
                                </div>
                                <div class="item">
                                    <img src={media3} class="img-responsive" />
                                </div>
                                <div class="item">
                                    <img src={media4} class="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MediaPartner;