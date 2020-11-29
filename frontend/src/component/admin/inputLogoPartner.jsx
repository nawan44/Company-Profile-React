import React from 'react';
import './css/input-partner.css';
import './css/admin.css';
import SideBar from './sideBar';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import m1 from '../img/people/1.png';
import m2 from '../img/people/2.png';
import m3 from '../img/people/3.png';
import Profile from '../img/profile.png';



class InputLogoPartner extends React.Component {
    render() {
        return (
            <div className="input">
                <SideBar />
                <div className="admin">
                    <img src={Profile} className="logo-admin" alt=" " />

                    <h2 className="h2admin">LOGO MEDIA PARTNER</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Input Logo Media Partner</legend>

                                <Label>Nama Partner :</Label>
                                <Input placeholder="ABC" type="text" />
                                <br />
                                <Label>Logo Partner :</Label>
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
                                <th>Nama Partner</th>
                                <th>Logo Partner</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td className="td-produk">Antv, Kompas Tv, SCTV, Global Tv, Hard Rock FM, Radio Kampus ITB</td>
                                <td><img src={m1} alt=" " /></td>
                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td className="td-produk">rtv, woman radio, mustang FM, Trijaya FM, 99ERS, OZ Radio Jakarta</td>
                                <td><img src={m2} alt=" " /></td>
                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td className="td-produk">106.1FM Gadis, Cosmo Girls, Sindonews, Kapanlagi.com, Kampus Update</td>
                                <td><img src={m3} alt=" " /></td>
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
export default InputLogoPartner;