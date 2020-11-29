import React from 'react';
import './css/input-partner.css';
import './css/admin.css';
import SideBar from './sideBar';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import Profile from '../img/profile.png';


class InputPortofolioYoutube extends React.Component {
    render() {
        return (
            <div className="input">
                <SideBar />
                <div className="admin">
                    <img src={Profile} className="logo-admin" alt=" " />

                    <h2 className="h2admin">PORTOFOLIO - YOUTUBE</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Input Portofolio Video Youtube</legend>

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
                                <th scope="row" className="td-id">1</th>
                                <td className="td-produk">Kiehl’s & Solange Knowles: 10th Anniversary Partnership</td>
                                <td className="td-youtube"><iframe width="560" height="315" src="https://www.youtube.com/embed/laTt5qozFnE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row" className="td-id">2</th>
                                <td className="td-produk">Indonesia Creative Week 2014</td>
                                <td className="td-youtube"><iframe width="560" height="315" src="https://www.youtube.com/embed/bccKeuJpkjs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
                                <td>
                                    <Button className="btn-edit">Edit</Button>
                                    <Button className="btn-delete">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="td-id">3</th>
                                <td className="td-produk">Pacific Royale Airways - Fokker F50s with refreshingly fresh livery</td>
                                <td className="td-youtube"><iframe width="560" height="315" src="https://www.youtube.com/embed/JgmhiQr8-Kk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
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
export default InputPortofolioYoutube;