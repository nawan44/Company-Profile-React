import React from 'react';
import './css/admin.css';
import SideBar from './sideBar';
import Admin from './admin';

class Index extends React.Component {
    render() {
        return (
            <div>
                <SideBar />
                <div className="admin">
                    <Admin />
                </div>
            </div>
        );
    }
}
export default Index;