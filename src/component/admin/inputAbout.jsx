import React from 'react';
import './css/input-partner.css';
import './css/admin.css';
import SideBar from './sideBar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class InputAbout extends React.Component {
    render() {
        return (
            <div className="input">
                <SideBar />
                <div className="admin">
                    <h2 className="h2admin">ABOUT US</h2>
                    <Form className="form">
                        <FormGroup>
                            <br />
                            <fieldset class="border p-2">
                                <legend class="w-auto">Input About</legend>

                                <Label>Title :</Label>
                                <Input placeholder="RSmartComm Key to Success" type="text" />
                                <br />
                                <Label>Deskripsi :</Label>
                                <Input type="textarea" className="text-area" placeholder="Integrated Marketing Communication Services, Digital Solution, Event Services, Public Relation, Media Placement, Media Activities, Integrated Film Production, Brand Activities and Leverage of Sales

Doing business is not only doing sales, but in the same time several stages should be prepared by organization who have some requirement in delivering the campaign, for various purposes ( such as Brand Activation, create demand, maintain awareness, etc). In some cases, companies have known on which part they should do in terms of marketing activities. However, they still got fail in communicating the messages to their target audiences/ segments/market. Therefore we are here will provide you the ”Integrated Marketing Communication Services” with consistent brand messaging across both traditional and non traditional marketing channels and using different promotional methods to reinforce each other." />
                                <Button className="btn-input" color="info">Input</Button>
                            </fieldset>
                            <br />
                        </FormGroup>
                    </Form>
                    <br />

                </div>
            </div>
        );
    }

}
export default InputAbout;