import React, {useEffect, useRef, useState, useCallback} from 'react';
import { Link } from 'react-router-dom'
import { Formik, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Row, Col, Label, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {TextInput, TextInput2, PhoneInput, MySelect, MyCheckbox, TextArea, phoneRegEx} from './support/Forms';
import UploadImages from './support/ImageUpload';
import '../App.css';
import './css/Estimate.css';


const Estimate = (props) => {
    const [validFiles, setValidFiles] = useState([]);
    
    function upload() {
        const formData = new FormData();
        for (let i = 0; i < validFiles.length; i++) {
            formData.append('image', validFiles[i]);
            formData.append('notes', (validFiles[i]).notes)
        }
        axios.post('endpoint/upload', formData, {
        }) 
    }
    
    return (
        <>
        <div className='mycontainer'>
        <Breadcrumb>
            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Quote</BreadcrumbItem>
        </Breadcrumb>
        <h1>Request an Estimate</h1>
        <Formik
            initialValues={{
                Name: '',
                email: '',
                tel: '',
                checked: [], 
                City: '', 
                Address: '',
                Notes: ''
            }}

            onSubmit={async (values) => {
                const response = await fetch('/estimate/send', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values)
                })
                upload() 
                props.history.push("/");
            }}

            validationSchema={Yup.object({
                Name: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                tel: Yup.string()
                    .matches(phoneRegEx, 'Invalid phone number')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
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
                label="Name:"
                name="Name"
                type="text"
                placeholder="Name"
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
            </div>
            
            <Row>
                <UploadImages parentCallback={setValidFiles}/>
            </Row>
                
            <TextArea
                label="Message:"
                name="Notes"
                className="notes"
                placeholder="Message"
            />
            
            <div>
            <button className='buttoncustom2 tick2' type="submit"> </button>
            </div>     
        </Form>
    </Formik>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    </>
    );
};

export default Estimate;