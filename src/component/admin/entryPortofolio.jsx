import React from 'react';
import './css/entry-portofolio.css';
import { Table } from 'reactstrap';
import SideBar from './sideBar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './css/admin.css';

class EntryPortofolio extends React.Component {
    render() {
        return (
            <div className="entry">
                <SideBar />
                <div className="admin">
                    <h2 className="h2admin">PORTOFOLIO</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Input Portofolio</legend>

                                <Label>Nama Produk :</Label>
                                <Input type="text" />
                                <br />
                                <Label>Pekerjaan :</Label>
                                <Input type="text" />
                                <br />
                                <Label>Detail Pekerjaan:</Label>
                                <Input type="text" />
                                <br />

                                <Label>Banner Portofolio :</Label>
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
                                <th>Nama Produk</th>
                                <th>Pekerjaan</th>
                                <th>Detail Pekerjaan</th>
                                <th>Banner Produk</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Rachmat</td>
                                <td>086363716713</td>
                                <td>086363716713</td>
                                <td>086363716713</td>

                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>086363716713</td>
                                <td>086363716713</td>
                                <td>086363716713</td>

                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>

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
export default EntryPortofolio;