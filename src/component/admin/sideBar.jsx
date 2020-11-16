import React from 'react';
import './css/side-bar.css';

class SideBar extends React.Component {
    render() {
        return (
            <div class="container" className="sidebar">
                <ul >
                    <li><a href="./">Home</a></li>
                    <li><a href="input-media">Input Media</a></li>
                    <li><a href="input-portofolio">Input Portofolio</a></li>
                    <li><a href="input-youtube">Input Youtube</a></li>
                    <li><a href="input-klien">Input Client</a></li>

                </ul>
            </div>
        );
    }
}
export default SideBar;