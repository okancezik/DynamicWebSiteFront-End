import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from "formik";
import { Col, Row, Card, FormGroup, Button, FormText } from 'react-bootstrap'
import * as Yup from "yup";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import MessageService from '../services/messageService';
import { MdTextFields } from 'react-icons/md';

export default function ContactUs() {

    const [messages, setMessages] = useState([])

    let messageService = new MessageService();

    useEffect(() => {
        messageService.getMessages().then(result => setMessages(result.data.data))
    }, []);


    const initialValues = { senderName: "", phoneNumber: "", mailAddress: "" ,inMessage:""};

    const schema = Yup.object({
        senderName: Yup.string().required("kullanıcı adı girmek zorunlu..."),
        phoneNumber: Yup.string().required("telefon numarası zorunlu..."),
        mailAddress: Yup.string().required("mail adresi zorunlu.."),
        inMessage : Yup.string()
    });

    function sendingMessage(values) {
        let messageService = new MessageService();
        messageService.addMessage(values);
        window.location.href = "/contact";
    }

    return (
        <div>
            <Row>
                <Col xs={7}>
                    <Card className="bg-primary text-white" id='cntc'>
                        <Card.Title><b>Mysoft</b></Card.Title>
                        <Card.Text>
                            <hr /><h5><BsFillTelephoneOutboundFill />  <b>0 (212) 901 0212</b></h5><hr />
                            <h5><FaEnvelope />      <b>info@mysoft.com.tr</b></h5>
                        </Card.Text>
                    </Card>
                </Col>
                <Col xs={5} id="message">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            values.id = messages.length + 1;
                            console.log(values)
                            sendingMessage(values)
                        }}>
                        <Card className='shadow-lg p-4'>
                            <Card.Title>Bize Ulaşın</Card.Title>
                            <Card.Body>
                                <Form className='bt-form'>
                                    <FormGroup className='mb-3'>
                                        <Field type="text" name="senderName" placeholder="Ad Soyad" required></Field>
                                    </FormGroup>
                                    <FormGroup className='mb-3'>
                                        <Field type="mail" name="mailAddress" placeholder="Mail Adres" required></Field>
                                    </FormGroup>
                                    <FormGroup className='mb-3'>
                                        <Field type="text" name="phoneNumber" placeholder="Telefon" required></Field>
                                    </FormGroup>
                                    <FormGroup className='mb-3'>
                                        <Field id = "textarea" type="textarea" name="inMessage" placeholder="Mesaj" required></Field>
                                    </FormGroup>
                                    <Button type="submit">ilet</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Formik>
                </Col>
            </Row>
        </div>
    )
}
