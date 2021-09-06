import React, { useState } from 'react';
import {Link, Redirect } from 'react-router-dom';
import UploadImages from '../components/support/ImageUpload';
import { Row, Col, Label, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Formik, Form } from 'formik';
import { MySelect, MyCheckbox, TextArea} from '../components/support/Forms';
import { Divider } from '@material-ui/core';
import * as Yup from 'yup';
import { addItem } from '../system/cartHelpers';
import '../App.css';
import './css/services.css'

const LawnMow = () => {
    const [values, setVal] = useState({
        name: '',
        Size: '',
        Length: '',
        checked: [], 
        Cut: '',
        Notes: '',
    });
    const [validFiles, setValidFiles] = useState([]);
    const [redirect, setRedirect] = useState(false);

    const addToCart = (v) => {
        addItem(v, setRedirect(true));
    };

    const shouldRedirect = redirect => {
        if (redirect) {
        return <Redirect to="/cart" />;
        }
    };
    
    const onSubmit = v => { 
       const val = {name: v.name, Size: v.Size, Length: v.Length, checked: v.checked, Cut: v.Cut, Notes: v.Notes}
       addToCart(val)
    }
    
    return (
        <>
        <div className='main_container'>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/services">Services</Link></BreadcrumbItem>
                <BreadcrumbItem active>Lawn Mowing</BreadcrumbItem>
            </Breadcrumb>
            {shouldRedirect(redirect)}
            <Formik
                initialValues={{
                    name: 'Lawn Mowing',
                    Size: '',
                    Length: '',
                    checked: [], 
                    Cut: '',
                    Notes: '',
                }}
                onSubmit={onSubmit}
                validationSchema={Yup.object({
                    
                })}   
            >
                
                <Form>
                    <MySelect label="Lawn Size:" name="Size">
                        <option value="">Select</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                    </MySelect>
                    <MySelect label="Grass Length:" name="Length">
                        <option value="">Select</option>
                        <option value="Not Overgrown">Not Overgrown</option>
                        <option value="Slightly Overgrown">Slightly Overgrown</option>
                        <option value="Overgrown">Overgrown</option>
                        <option value="Extremely Overgrown">Extremely Overgrown</option>
                    </MySelect>
                    <Divider variant="middle" />
                    <div>
                    <label>Lawn Areas:</label>
                    <Row>  
                        <MyCheckbox name="checked" value="Front Yard">
                            Front Yard
                        </MyCheckbox>
                        <MyCheckbox name="checked" value="Back Yard">
                            Back Yard
                        </MyCheckbox>
                        <MyCheckbox name="checked" value="Sides">
                            Sides
                        </MyCheckbox>
                        <MyCheckbox name="checked" value="Boulevard">
                            Boulevard
                        </MyCheckbox>
                        <MyCheckbox name="checked" value="Boulevard">
                            Other
                        </MyCheckbox>
                    </Row>
                    <MySelect label="Grass Cut:" name="Cut">
                        <option value="">Select</option>
                        <option value="Regular">Regular</option>
                        <option value="Short">Short</option>
                    </MySelect>
                    </div>
                    <Row>
                        <UploadImages parentCallback={setValidFiles}/>
                    </Row>
                    <TextArea
                        label="Notes:"
                        name="Notes"
                        className="notes"
                        placeholder="Notes"
                    />
                    <div>
                    <button className='buttoncustom2 tick2' type="submit" > </button>
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
}

export default LawnMow;