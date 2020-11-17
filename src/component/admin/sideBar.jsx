import React from 'react';
import './css/side-bar.css';

class SideBar extends React.Component {
    render() {
        return (
            <div class="container" className="sidebar">
                <ul >
                    <li><a href="admin">Home</a></li>
                    <li><a href="data-pt">Data Perusahaan</a></li>
                    <li><a href="entry-partner">Input Media Partner</a></li>
                    <li><a href="entry-portofolio">Input Portofolio</a></li>
                    <li><a href="entry-youtube">Input Youtube</a></li>
                    <li><a href="entry-client">Input Client</a></li>

                </ul>
            </div>
        );
    }
}
export default SideBar;