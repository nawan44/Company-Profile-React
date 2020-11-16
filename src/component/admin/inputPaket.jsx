import React from 'react';
import './css/input-paket.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SideBar from './sideBar';
import './css/admin.css';

class InputPaket extends React.Component {
    render() {
        return (
            <div className="admin">
                <div className="side">
                    <SideBar />
                </div>

                <div className="info-paket">
                    <Form>
                        <h1 className="h1">INPUT PAKET</h1>
                        <FormGroup>
                            <Label for="text">Nama Paket</Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label for="text">Kategori</Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label for="text">Harga</Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label for="text">Detail</Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label>Gambar</Label>
                            <Input
                                type="file"
                                name="file_upload"
                                id="file_upload"
                            />
                        </FormGroup>
                        <Button block>Masukkan</Button>
                    </Form>

                </div>
            </div>
        );
    }

}
export default InputPaket;