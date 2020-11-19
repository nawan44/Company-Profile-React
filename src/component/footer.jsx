import React from 'react';
import './css/footer.css';
import { Container, Col, Row } from 'reactstrap';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" >
                <Container >
                    <Row>
                        <Col xs="6" sm="4" className="contact-details">
                            <h4><CallIcon style={{ fontSize: 30 }} /> Call</h4>
                            <p><a href="https://wa.me/+6281286281980">081286281980</a></p>
                        </Col>
                        <Col xs="6" sm="4" className="contact-details">
                            <h4><LocationOnIcon style={{ fontSize: 30 }} /> Visit</h4>
                            <p> <a href="https://goo.gl/maps/GpjMTqSTKenzxpkw8">Jl. Tebet Timur Dalam I J No 24  <br />Jakarta Selatan</a></p>
                        </Col>
                        <Col sm="4" className="contact-details">
                            <h4><MailOutlineIcon style={{ fontSize: 30 }} /> Email</h4>
                            <p><a href="mailto:info@rsmartcomm.com">info@rsmartcomm.com</a>
                            </p>
                        </Col>
                    </Row>
                    <Row xs="3" className="social">
                        <Col xs="6" sm="4" className="contact-details">
                            <a href="https://facebook.com"><FacebookIcon style={{ fontSize: 60 }} color="primary" /></a>
                        </Col>
                        <Col xs="6" sm="4" className="contact-details">
                            <a href="https://twitter.com"><TwitterIcon style={{ fontSize: 60 }} color="primary" /></a>
                        </Col>
                        <Col sm="4" className="contact-details">
                            <a href="https://linkedin.com"><LinkedInIcon style={{ fontSize: 60 }} color="primary" /></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="copyright">&copy; RSmartComm all right reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;