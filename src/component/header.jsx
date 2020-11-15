import React from 'react';
import './css/header.css';
import Profile from './img/profile.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="head">
                    <div className="img-container">
                        <img src={Profile} className=" img-centered" class="center" />
                    </div>
                    <div className="brand-name">RSmartComm</div>
                    <hr className="colored" />
                    <hr className="colored" />

                    <div className="brand-name-subtext">Reach Your Goal with Smart Communication</div>
                </div>
                <div className="scroll-down">
                    <a class="btn" href="#about"><i class="fa fa-angle-down fa-fw"></i></a>
                </div>

            </div>
        )
    }
}

export default Header;