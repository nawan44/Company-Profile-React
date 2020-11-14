import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import './css/contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Form className="contactus">
                    <FormGroup>
                        <h1 className="h1contact" >CONTACT US</h1>
                        <hr className="hrred" />
                        <Label >Please tell us about your next project and we will let you know what we can do to help you.</Label>
                        <br />
                        <br />
                        <p><Input type="text" placeholder="Name" /></p>
                        <p><Input type="text" placeholder="Email Address" /></p>
                        <p><Input type="text" placeholder="Phone Number" /></p>
                        <p><Input type="textarea" placeholder="Message" /></p>
                        <Button color="info" block>Send</Button>
                    </FormGroup>

                </Form>
                <a href="#contact" class="btn btn-block btn-full-width">Let's Discuss!</a>

            </div>
        );
    }
}

export default Contact;