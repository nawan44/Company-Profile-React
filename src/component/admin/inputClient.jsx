import React from 'react';
import './css/input-partner.css';
import './css/admin.css';
import SideBar from './sideBar';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import c1 from '../img/client-logos/c1.png';
import c2 from '../img/client-logos/c2.png';
import c3 from '../img/client-logos/c3.png';

class InputClient extends React.Component {
    render() {
        return (
            <div className="input">
                <SideBar />
                <div className="admin">
                    <h2 className="h2admin">LOGO CLIENT</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Input Logo Client</legend>

                                <Label>Nama Client :</Label>
                                <Input placeholder="ABC" type="text" />
                                <br />
                                <Label>Logo Client :</Label>
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
                                <th>Nama Client</th>
                                <th>Logo Client</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td className="td-produk">EU Indonesia Business Network, Jaguar, Land Rover, The Stones</td>
                                <td><img src={c1} /></td>
                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td className="td-produk">Appeton, Huawei, L'Oreal</td>
                                <td><img src={c2} /></td>
                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td className="td-produk">glow Rumah Terindah</td>
                                <td><img src={c3} /></td>
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
export default InputClient;