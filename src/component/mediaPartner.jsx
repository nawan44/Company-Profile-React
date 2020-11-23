import React from 'react';
import './css/media-partner.css';
import media1 from './img/people/1.png';
import media2 from './img/people/2.png';
import media3 from './img/people/3.png';
import media4 from './img/people/4.png';
import { Container, Row, Col } from 'reactstrap';


class MediaPartner extends React.Component {
    render() {
        return (
            <div className="services">
                <Container>
                    <Row>
                        <h1 >Media Partner</h1>
                    </Row>
                    <hr />
                    <Row>
                        <h5>
                            We are using a Digital Marketing Strategy, WOM on communities and coperation with some Media Partner from :
                            </h5>
                    </Row>
                    <Row>
                        <Col className="col-media"> <img src={media1} className="img-responsive" alt=" " /></Col>
                        <Col className="col-media"> <img src={media2} className="img-responsive" alt=" " /></Col>
                        <Col className="col-media"> <img src={media3} className="img-responsive" alt=" " /></Col>
                        <Col className="col-media"> <img src={media4} className="img-responsive" alt=" " /></Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default MediaPartner;