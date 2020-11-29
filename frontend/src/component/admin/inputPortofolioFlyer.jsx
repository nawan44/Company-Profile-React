import React from 'react';
import './css/input-portofolio.css';
import SideBar from './sideBar';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import port1 from '../img/portfolio/port1.jpg';
import port2 from '../img/portfolio/port2.jpg';
import port3 from '../img/portfolio/port3.jpg';
import './css/admin.css';
import Profile from '../img/profile.png';


class InputPortofolioFlyer extends React.Component {
    render() {
        return (
            <div className="input">
                <SideBar />
                <div className="admin">
                    <img src={Profile} className="logo-admin" alt=" " />

                    <h2 className="h2admin">FLYER - PORTOFOLIO</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Input Portofolio Flyer</legend>

                                <Label>Nama Produk :</Label>
                                <Input placeholder="ABC" type="text" />
                                <br />
                                <Label>Nama Pekerjaan :</Label>
                                <Input placeholder="Sponsorship" type="text" />
                                <br />
                                <Label>Detail Pekerjaan:</Label>
                                <Input placeholder="abc.com" type="text" />
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
                                <td>Malam Minggu Miko Movie</td>
                                <td>Sponsorship, Media Partner, Events, Digital Campaign, Brands Activities</td>
                                <td>Berniaga.com Kacang Garuda, Hotels of Roadshow</td>
                                <td> <img src={port1} alt=" " /></td>

                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Janji Hati</td>
                                <td>Sponsorship, Media Partner, Events, Media Placement, Digital Campaign, Brands Activities</td>
                                <td>Yamaha, Pejaten Village, Labels, Restaurants</td>
                                <td><img src={port2} alt=" " /></td>

                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Stay With Me</td>
                                <td>Sponsorship, Media Placement, Digital Campaign, Brands Activities</td>
                                <td>Huawei, Mercy, Jaguar, Metrox</td>
                                <td><img src={port3} alt=" " /></td>

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
export default InputPortofolioFlyer;