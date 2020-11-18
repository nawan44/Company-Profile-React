import React from 'react';
import './css/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" >
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4 contact-details">
                            <h4><i className="fa fa-phone"></i> Call</h4>
                            <p>08179801323</p>
                        </div>
                        <div className="col-md-4 contact-details">
                            <h4><i className="fa fa-map-marker"></i> Visit</h4>
                            <p> Jl. Tebet Timur Dalam I J No 24  <br />Jakarta Selatan</p>
                        </div>
                        <div className="col-md-4 contact-details">
                            <h4><i className="fa fa-envelope"></i> Email</h4>
                            <p><a href="mailto:mail@example.com">info@rsmartcomm.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="row social">
                        <div className="col-lg-12">
                            <ul className="list-inline">
                                <li><a href="#"><i className="fa fa-facebook fa-fw fa-2x"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-twitter fa-fw fa-2x"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-linkedin fa-fw fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-lg-12">
                            <p className="small">&copy; RSmartComm all right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;