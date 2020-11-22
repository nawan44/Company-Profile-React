import React from 'react';
import './css/we-do.css';
import gbr1 from './img/wedo/1.png';
import gbr2 from './img/wedo/2.png';
import gbr3 from './img/wedo/3.png';
import { Container, Row, Col } from 'reactstrap';



class WeDo extends React.Component {
    render() {
        return (
            <div id="services" >
                <Container>
                    <Row>
                        <h1 className="h1wedo">What We Do</h1>
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <h4 className="h4wedo">
                            Our Core in Integrated Marketing Services :
                        </h4>
                    </Row>
                    <Row className="row-wedo">
                        <Col className="col-img" >
                            <img src={gbr1} className="iconwe" alt=" " />
                        </Col>
                        <Col className="col-li">
                            <h3 className="h3wedo">1</h3>
                            <ul>
                                <li className="liwe">Marketing Communication</li>
                                <li className="liwe">Event Services</li>
                                <li className="liwe">Digital Solution</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="row-wedo">
                        <Col className="col-img">
                            <img src={gbr2} className="iconwe" alt=" " />
                        </Col>
                        <Col className="col-li">
                            <h3 className="h3wedo">2</h3>
                            <ul>
                                <li className="liwe">Media Placement</li>
                                <li className="liwe">Public Relations</li>
                                <li className="liwe">Sales Leverage</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="row-wedo">
                        <Col className="col-img">
                            <img src={gbr3} className="iconwe" alt=" " />
                        </Col>
                        <Col className="col-li">
                            <h3 className="h3wedo">3</h3>
                            <ul>
                                <li className="liwe">Media Activities</li>
                                <li className="liwe">Brand Activation</li>
                                <li className="liwe">Integrated Film Solution</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default WeDo;