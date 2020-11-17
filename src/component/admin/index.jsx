import React from 'react';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';
import './css/admin.css';
// import Content from '../../content';
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