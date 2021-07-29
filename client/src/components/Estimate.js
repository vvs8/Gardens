import React, {useEffect} from 'react';
import { Formik, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Label } from 'reactstrap';

import '../App.css';
import './css/Estimate.css';

var phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const TextInput = ({ label, ...props }) => {
// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
// which we can spread on <input>. We can use field meta to show an error
// message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <row>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" required {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
                
        </row>
    );
};

const TextInput2 = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <row>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input className="text-input" {...field} {...props} />
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) : null}
                    
            </row>
        );
    };

const TextArea = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <row>
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className="text-area" {...field} {...props} />
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) : null}
            </row>
        );
    };

const PhoneInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <row>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input type="tel" className="phone-input" required {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
                
        </row>
    );
};

const MyCheckbox = ({ children, ...props }) => {
// React treats radios and checkbox inputs differently other input types, select, and textarea.
// Formik does this too! When you specify `type` to useField(), it will
// return the correct bag of props for you -- a `checked` prop will be included
// in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
        <label className="checkbox-input">
            <input type="checkbox" {...field} {...props} />
            {children}
        </label>
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};


const Estimate = () => {
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
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
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