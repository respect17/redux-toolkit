// UserForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UserForm = () => {
    const initialValues = {
        name: '',
    };

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        return errors;
    };

    const handleSubmit = (values, { resetForm }) => {

        resetForm();
    };

    return (
        <div>
            <h2>Add User</h2>
            <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
                <Form>
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" />
                    <button type="submit">Add User</button>
                </Form>
            </Formik>
        </div>
    );
};

export default UserForm;
