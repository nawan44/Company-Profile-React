import React from 'react';
import './css/header.css';
import Profile from './img/profile.png';

import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
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
                <div className="arrow">
                    <a className="btn" href="#about">
                        <ArrowDropDownCircleIcon className="arrowDown" color="primary" style={{ fontSize: 100 }} />
                    </a>
                </div>

            </div >
        )
    }
}

export default Header;