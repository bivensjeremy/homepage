import { useState } from 'react';
import { Formik, Form, Field, useField } from 'formik'
import TextField, { OptionField, MessageField } from './FormField';
import * as Yup from 'yup';
import FormSubmitSuccess from './FormSubmitSuccess';

const ContactMeForm = () => {
    const [Processing, setProcessing] = useState('');
    const [Succeeded, setSucceeded] = useState(false);
    const validate = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Invalid email'),
        subject: Yup.string().required('Click to choose from dropdown'),
        message: Yup.string().required("Don't forget to leave a message..."),
    })

    return (
        <div className="m-auto bg-light rounded-3 col-lg-8">
            
            <Formik
                initialValues={{
                    name: '',
                    subject: '',
                    email: '',
                    message: '',
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    setProcessing(true);
                    const response = await fetch("/api/contactmeapi", { 
                        method: 'POST', 
                        headers: { 
                            'Content-type': 'application/json',
                            'Accept': 'application/json'
                        }, 
                        body: JSON.stringify(values) 
                    });
                    const resData = await response.json();
                    if (resData.status === 'success'){
                        setProcessing(false);
                        setSucceeded(true);
                    }else if(resData.status === 'fail'){
                        setProcessing(false);
                        alert("Message failed to send.")
                    }
                  }}
            >
                <div className="p-5 m-auto col-lg-8">
                    {Succeeded ? (<FormSubmitSuccess />) : (
                        <div>
                            <h1 className="fw-bold text-center">Send me a message</h1>
                            <Form>
                                <TextField label="Name" name="name" type="text" />
                                <TextField label="Email" name="email" type="email" />
                                <OptionField label="Subject" name="subject" type="text" />
                                <MessageField label="Message" name="message" type="text" />
                                
                                <div className="text-end">
                                    <button type="submit" disabled={Processing || Succeeded} className="btn text-light w-50 fw-bold rounded-pill p-2 customOrangeButton">{Processing ? (
                                        <div className="spinner-border text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        "Send"
                                    )}</button> 
                                </div>
                            </Form>
                        </div> 
                    )}
                </div>
            </Formik>
        </div>
        
    );
}

export default ContactMeForm;