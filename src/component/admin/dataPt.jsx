import React from 'react';
import './css/entry-partner.css';
import { Table } from 'reactstrap';
import './css/admin.css';
import SideBar from './sideBar';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class DataPt extends React.Component {
    render() {
        return (
            <div className="entry">
                <SideBar />
                <div className="admin">
                    <h2 className="h2admin">Data Perusahaan</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Edit Data Perusahaan</legend>

                                <Label>Nama Perusahaan :</Label>
                                <Input type="text" />
                                <br />
                                <Label>Alamat Perusahaan :</Label>
                                <Input type="text" />
                                <br />
                                <Label>Email Perusahaan :</Label>
                                <Input type="text" />
                                <br />
                                <Label>No Telpon Perusahaan :</Label>
                                <Input type="text" />
                                <br />
                                <Label>Email Perusahaan :</Label>
                                <Input type="text" />
                                <br />
                                <Label>Logo Perusahaan :</Label>
                                <Input type="text" />
                                <br />
                                <hr />
                                <fieldset class="border p-2">
                                    <legend class="w-auto">Media Sosial</legend>
                                    <br />
                                    <Label>Facebook :</Label>
                                    <Input type="url" />
                                    <br />
                                    <Label>Twitter :</Label>
                                    <Input type="url" />
                                    <br />
                                    <Label>Linkedin :</Label>
                                    <Input type="url" />

                                </fieldset>
                                <br />
                                <Button className="btn-input" color="info">Input</Button>
                            </fieldset>
                            <br />
                        </FormGroup>
                    </Form>

                </div>
            </div>
        );
    }

}
export default DataPt;