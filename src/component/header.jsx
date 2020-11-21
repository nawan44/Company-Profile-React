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
                <div className="arrow">
                    <a className="btn" href="#about">
                        <svg className="arrowDown" width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                        </svg>
                    </a>
                </div>

            </div >
        )
    }
}

export default Header;