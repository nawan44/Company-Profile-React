import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './css/contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <Form className="contactus">
                    <FormGroup>
                        <h1 >CONTACT US</h1>
                        <hr />
                        <h5 >Please tell us about your next project and we will let you know what we can do to help you.</h5>
                        <br />
                        <p><Input className="FormInput" type="text" placeholder="Name" /></p>
                        <p><Input className="FormInput" type="text" placeholder="Email Address" /></p>
                        <p><Input className="FormInput" type="text" placeholder="Phone Number" /></p>
                        <p><Input className="FormInput" type="textarea" placeholder="Message" /></p>
                        <Button color="info" className="btn-send" block>Send
                        </Button>
                    </FormGroup>
                </Form>
                <a href="#contact" class="btn btn-block btn-full-width">Let's Discuss!</a>

            </div>
        );
    }
}

export default Contact;