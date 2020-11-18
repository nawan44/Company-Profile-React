import React from 'react';
import './css/entry-partner.css';
import { Table } from 'reactstrap';
import './css/admin.css';
import SideBar from './sideBar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class EntryYoutube extends React.Component {
    render() {
        return (
            <div className="entry">
                <SideBar />
                <div className="admin">
                    <h2 className="h2admin">PORTOFOLIO YOUTUBE</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Input Video Youtube</legend>

                                <Label>Nama Produk :</Label>
                                <Input placeholder="ABC" type="text" />
                                <br />
                                <Label>Link Youtube :</Label>
                                <Input placeholder="<iframe width=560 height=315 src=https://www.youtube.com/embed/aJOTlE1K90k frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>" type="url" className="text" />
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
                                <th>Link Youtube</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Rachmat</td>
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
                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
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
export default EntryYoutube;