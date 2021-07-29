import React from 'react';
import { Formik, Form, useField, ErrorMessage } from 'formik';


export var phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


export const TextInput = ({ label, ...props }) => {
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

export const TextInput2 = ({ label, ...props }) => {
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

export const TextArea = ({ label, ...props }) => {
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

export const PhoneInput = ({ label, ...props }) => {
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

export const MyCheckbox = ({ children, ...props }) => {
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

export const MySelect = ({ label, ...props }) => {
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
