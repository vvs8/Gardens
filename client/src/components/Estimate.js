import React, {useEffect, useRef} from 'react';
import { Formik, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Label } from 'reactstrap';
import {TextInput, TextInput2, PhoneInput, MySelect, MyCheckbox, TextArea, phoneRegEx} from './support/Forms';
import Dropzone from './support/ImageUpload';
import '../App.css';
import './css/Estimate.css';

const Estimate = (props) => {
    const imgRef = useRef();

    return (
        <div className='mycontainer'>
        <h1>Request an Estimate</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                tel: '',
                checked: [], 
                City: '', 
                Address: '',
                Notes: ''
            }}

            onSubmit={async (values) => {
                
                imgRef.current.uploadFiles()
                const response = await fetch('/estimate/send', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values)
                })
                props.history.push("/");
                
                
            }}

            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                tel: Yup.string()
                    .matches(phoneRegEx, 'Invalid phone number')
                    .required('Required'),
                City: Yup.string()
                    .oneOf(
                        ['Vancouver', 'Burnaby', 'Coquitlam', 'New Westminster', 'North Vancouver', 'West Vancouver', 'Richmond'],
                        'Invalid City'
                    )
                    .required('Required'),  
            })}   
        >

        <Form>
            <TextInput
                label="First Name:"
                name="firstName"
                type="text"
                placeholder="First"
            />

            <TextInput
                label="Last Name:"
                name="lastName"
                type="text"
                placeholder="Last"
            />

            <TextInput
                label="Email Address:"
                name="email"
                type="email"
                placeholder="Email"
            />

            <PhoneInput
                label="Phone Number:"
                name="tel"
                type="tel"
                placeholder="Tel."
            />

            <MySelect label="Сity:" name="City">
                <option value="">Select your city</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Burnaby">Burnaby</option>
                <option value="Coquitlam">Coquitlam</option>
                <option value="New Westminster">New Westminster</option>
                <option value="North Vancouver">North Vancouver</option>
                <option value="West Vancouver">West Vancouver</option>
                <option value="Richmond">Richmond</option>
            </MySelect>

            <TextInput2
                label="Address:"
                name="Address"
                type="text"
                placeholder="Address"
            />

            <div>
            <label>Services:</label>
            <Row>
                <Col>
                    <MyCheckbox name="checked" value="Lawn Services">
                        Lawn Services
                    </MyCheckbox>
                </Col>
                <Col>
                    <MyCheckbox name="checked" value="Garden Cleanup">
                        Garden Cleanup
                    </MyCheckbox>
                 </Col>
            </Row>
            <Row>
                <Col>
                    <MyCheckbox name="checked" value="Sod">
                        Sod Installation
                    </MyCheckbox>
                </Col>
                <Col>
                    <MyCheckbox name="checked" value="Maintenance">
                        Maintenance
                    </MyCheckbox>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MyCheckbox name="checked" value="Hedge Trimming">
                        Hedge Trimming
                    </MyCheckbox>
                </Col>
                <Col>
                    <MyCheckbox name="checked" value="Other">
                        Other
                    </MyCheckbox>
                </Col>
            </Row>
            </div>
            
            <div>
                <Dropzone ref={imgRef}/>
            </div>
           
            <TextArea
                label="Notes:"
                name="Notes"
                className="notes"
                placeholder="Notes"
            />
            
            <div>
            <button className='button-sub' type="submit">Submit</button>
            </div>     
        </Form>
    </Formik>
    </div>
    );
};

export default Estimate;