import React from 'react';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';
import './css/admin.css';
// import Content from '../../content';
import SideBar from './sideBar';
import Login from './login';


class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
        };
    }
    logoutMethod = () => {
        this.setState({ isLoggedIn: false })
    }
    loginMethod = () => {
        this.setState({ isLoggedIn: true })
    }
    render() {
        let { isLoggedIn } = this.state;
        const renderButton = () => {
            if (isLoggedIn) {
                return (
                    <div className="admin">
                        {/* <NavAdmin/> */}
                        {/* <Carousel/> */}
                        <div className="login">
                            <Button block onClick={this.logoutMethod}>Logout</Button>
                        </div>
                        <SideBar />
                        {/* <Content /> */}
                        {/* <Footer/> */}
                    </div>
                );


            }
            else {
                return (
                    <Login />
                );
            }
        }
        return (
            <div className="App">
                <h1>Halaman Admin</h1>
                {renderButton()}
            </div>
        );


    }
}
export default Admin;