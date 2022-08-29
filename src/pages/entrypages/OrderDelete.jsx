import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FormGroup, Row, Col } from 'react-bootstrap';
import OrderService from '../../services/orderService';
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function OrderDelete() {

    let orderService = new OrderService();

    const [orders, setOrders] = useState([])

    useEffect(() => {
        orderService.getOrders().then(result => setOrders(result.data.data))
    }, []);


    let initialValues = { orderProductId: "", customerId: "" };

    const schema = Yup.object({
        orderProductId: Yup.number().required("ürün id bilgisi girilmesi zorunludur..."),
        customerId: Yup.number().required("müşteri id bilgisi girilmesi zorunludur...")
    });

    function deleteControl(orderProductId, customerId) {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].orderProductId === orderProductId && orders[i].customerId === customerId) {
                console.log("sipariş bulundu");
                return true;
            }
        }
        console.log("sipariş bulunamadı");
        return false;
    }

    function deleteOrder(values) {
        if (deleteControl(values.orderProductId, values.customerId)) {
            orderService.deleteOrder(values.orderProductId, values.customerId);
            alert("Sipariş silme işlemi başarılı , siparişler tablosuna yönlendiriliyorsunuz...");
            window.location.href = "/orders";
        } else {
            // console.log(text)
            alert("Sistemde girilen bilgilere ait bir sipariş bulunamadı...");
            window.location.href = "/order/delete";
        }
    }

    return (
        <div className='operationsform'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    deleteOrder(values)
                }}>
                <Card className='shadow-lg p-4'>
                    <Card.Title>Sipariş Silme Formu</Card.Title>
                    <Card.Body>
                        <Form className='bt-form'>
                            <FormGroup className='mb-3'>
                                <Field
                                    type="number"
                                    name="orderProductId"
                                    placeholder="Ürün id bilgisi"
                                    required
                                >
                                </Field>
                            </FormGroup>
                            <FormGroup className='mb-3'>
                                <Field
                                    type="number"
                                    name="customerId"
                                    placeholder="Şirket id bilgisi"
                                    required>
                                </Field>
                            </FormGroup>
                            <Button variant='danger' type='submit'>Siparişi Sil</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Formik>
            <Row><Col id="backorderdlt"><Link to="/operations"><MdOutlineArrowBack /></Link></Col></Row>
        </div>
    )
}
