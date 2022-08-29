import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Col, FormGroup, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomerService from '../../services/customerService';
import {MdOutlineArrowBack} from "react-icons/md";
import { Link } from 'react-router-dom';

export default function CustomerAdd() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        let customerService = new CustomerService();
        customerService.getCustomers().then(result => setCustomers(result.data.data))
    }, [])

    const initialValues = { customerId: null, companyName: "", contactName: "", emailAddress: "", phoneNumber: "", faxnumber: "" };

    const schema = Yup.object({
        companyName: Yup.string().required("Şirket adı zorunludur"),
        contactName: Yup.string().required("İletişim adı zorunludur"),
        emailAddress: Yup.string().email().required(),
        phoneNumber: Yup.string().max(11, "en fazla 11 hane girebilirsiniz").required(),
        faxNumber: Yup.string().max(11, "en fazla 11 hane girebilirsiniz").required()
    });

    function addToSystem(values) {
        let customerService = new CustomerService();
        customerService.addCustomer(values);
        alert('Müşteri Eklendi...');
        window.location.href = '/customers';
    }

    return (
        <div className='operationsform'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    values.customerId = customers.length + 1
                    console.log(values);
                    addToSystem(values);
                }
                }
            >
                <Card className='shadow-lg p-4' id="customeraddform">
                    <Card.Title>Müşteri Ekleme Formu</Card.Title>
                    <Card.Body>
                        <Form className='bt-form'>
                            <FormGroup className="mb-3">
                                <Field type="text" size="35" name="companyName" placeholder="Şirket adı" required></Field>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Field type="textarea" size="35" name="contactName" placeholder="İletişimdeki personel adı" required></Field>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Field type="email" size="35" name="emailAddress" placeholder="Mail adresi" required></Field>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Field type="phone" size="35" name="phoneNumber" placeholder="Telefon" required></Field>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Field type="fax" size="35" name="faxNumber" placeholder="Fax" required></Field>
                            </FormGroup>
                            <Button variant="success" type="submit">Müşteriyi Ekle</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Formik>
            <Row>
                <Col id = "back"><Link to="/operations"><MdOutlineArrowBack/></Link></Col>
            </Row>
        </div>
    )
}
