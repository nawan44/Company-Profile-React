import React from 'react';
import './css/admin.css';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <Form>
                    <Label><h1>LOGIN ADMIN</h1></Label>
                    <hr />
                    <FormGroup>
                        <Label for="text">Username</Label>
                        <Input type="text"
                            name="username"
                            id="username"
                            placeholder="username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleNumber">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                        />
                    </FormGroup>
                    <Button block>
                        <Link href="admin">Login</Link>
                    </Button>

                </Form>
            </div>
        );
    }

}
export default Login;