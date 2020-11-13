import React from 'react';
import './css/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div class="footer" >
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-4 contact-details">
                            <h4><i class="fa fa-phone"></i> Call</h4>
                            <p>08179801323</p>
                        </div>
                        <div class="col-md-4 contact-details">
                            <h4><i class="fa fa-map-marker"></i> Visit</h4>
                            <p>Jl. Tebet Timur Dalam I J No 24  <br />Jakarta Selatan</p>
                        </div>
                        <div class="col-md-4 contact-details">
                            <h4><i class="fa fa-envelope"></i> Email</h4>
                            <p><a href="mailto:mail@example.com">info@rsmartcomm.com</a>
                            </p>
                        </div>
                    </div>
                    <div class="row social">
                        <div class="col-lg-12">
                            <ul class="list-inline">
                                <li><a href="#"><i class="fa fa-facebook fa-fw fa-2x"></i></a>
                                </li>
                                <li><a href="#"><i class="fa fa-twitter fa-fw fa-2x"></i></a>
                                </li>
                                <li><a href="#"><i class="fa fa-linkedin fa-fw fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row copyright">
                        <div class="col-lg-12">
                            <p class="small">&copy; RSmartComm all right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;