import React from 'react';
import './css/side-bar.css';

class SideBar extends React.Component {
    render() {
        return (
            <div class="container" className="sidebar">
                <ul >
                    <li><a href="admin">Home</a></li>
                    <li><a href="data-pt">Data Perusahaan</a></li>
                    <li><a href="input-about">Input About</a></li>
                    <li><a href="input-wedo">Input What We Do</a></li>
                    <li><a href="input-partner">Input Media Partner</a></li>
                    <li><a href="input-portofolio">Input Portofolio</a></li>
                    <li><a href="input-youtube">Input Youtube</a></li>
                    <li><a href="input-client">Input Client</a></li>

                </ul>
            </div>
        );
    }
}
export default SideBar;