import React from 'react';
import './css/clients.css';
import c1 from './img/client-logos/c1.png';
import c2 from './img/client-logos/c2.png';
import c3 from './img/client-logos/c3.png';
import c4 from './img/client-logos/c4.png';
import c5 from './img/client-logos/c5.png';
import { Container, Row, Col } from 'reactstrap';


class OurClients extends React.Component {
    render() {
        return (
            <div className="clients ">
                <Container>
                    <Row>
                        <h1 >OUR CLIENTS</h1>
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <h5 >
                            Here are some our clients that we've worked on :
                         </h5>
                    </Row>
                    <Row>
                        <Col className="col-client">
                            <img src={c1} className="img-responsive" alt=" " />
                        </Col>
                        <Col className="col-client">
                            <img src={c2} className="img-responsive" alt=" " />
                        </Col>
                        <Col className="col-client">
                            <img src={c3} className="img-responsive" alt=" " />
                        </Col>
                        <Col className="col-client">
                            <img src={c4} className="img-responsive" alt=" " />
                        </Col>
                        <Col className="col-client">
                            <img src={c5} className="img-responsive" alt=" " />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default OurClients;