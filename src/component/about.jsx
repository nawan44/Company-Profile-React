import React from 'react';
import './css/about.css';
import { Container, Row } from 'reactstrap';


class About extends React.Component {
    render() {
        return (
            <div id="about">
                <Container>
                    <Row>
                        <h1 className="h1about">About</h1>
                    </Row>
                    <Row>
                        <h4>
                            RSmartComm Key to Success
                        </h4>
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        <p >
                            Integrated Marketing Communication Services, Digital Solution, Event Services, Public Relation, Media Placement, Media Activities, Integrated Film Production,
                            Brand Activities and Leverage of Sales
                            </p>
                        <p >
                            Doing business is not only doing sales, but in the same time several stages should be prepared by organization who have some requirement in delivering the campaign, for various purposes ( such as Brand Activation, create demand, maintain awareness, etc). In some cases, companies have known on which part they should do in terms of marketing activities. However, they still got fail in communicating the messages to their target audiences/ segments/market. Therefore we are here will provide you the ”Integrated Marketing Communication Services” with consistent brand messaging across both traditional and non traditional marketing channels and using different promotional methods to reinforce each other.
                            </p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;