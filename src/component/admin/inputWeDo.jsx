import React from 'react';
import './css/input-partner.css';
import './css/admin.css';
import SideBar from './sideBar';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import we1 from '../img/wedo/create.png';
import we2 from '../img/wedo/file.png';
import we3 from '../img/wedo/flight.png';

class InputWeDo extends React.Component {
    render() {
        return (
            <div className="input">
                <SideBar />
                <div className="admin">
                    <h2 className="h2admin">WHAT WE DO</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Input What We Do</legend>

                                <Label>List We Do :</Label>
                                <Input placeholder="Marketing Communication
                                                    Event Services
                                                    Digital Solution" type="textarea" className="text-area" />
                                <br />
                                <Label>Icon We Do :</Label>
                                <Input type="file" className="input-file" />
                                <Button className="btn-input" color="info">Input</Button>
                            </fieldset>
                            <br />
                        </FormGroup>
                    </Form>
                    <br />
                    <Table size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>List We Do</th>
                                <th>Icon We Do</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Marketing Communication
                                Event Services
                                                    Digital Solution</td>
                                <td><img className="icon-img" src={we1} /></td>

                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Media Placement
                                Public Relations
                                    Sales Leverage</td>
                                <td><img className="icon-img" src={we2} /></td>

                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Media Activities
                                Brand Activation
                                    Integrated Film Solution</td>
                                <td><img className="icon-img" src={we3} /></td>

                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

}
export default InputWeDo;