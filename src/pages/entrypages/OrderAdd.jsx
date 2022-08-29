import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from 'react'
import * as Yup from "yup";
import { Button, Card, Col, FormGroup, Row } from 'react-bootstrap'
import OrderService from "../../services/orderService";
import ProductService from "../../services/productService";
import CustomerService from "../../services/customerService";
import { Link } from "react-router-dom";
import {MdOutlineArrowBack} from "react-icons/md";

export default function OrderAdd() {

    let orderService = new OrderService();
    let productService = new ProductService();
    let customerService = new CustomerService(); 

    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);


    useEffect(() => {
        orderService.getOrders().then(result => setOrders(result.data.data))
        productService.getProducts().then(result => setProducts(result.data.data))
        customerService.getCustomers().then(result => setCustomers(result.data.data))
    }, []);


    const initialValues = { orderId: null, orderProductId: "", customerId: "", orderDate: "", isDelivered: false }

    const schema = Yup.object({
        orderProductId: Yup.number().required("ürün id bilgisi girmek zorunludur"),
        customerId: Yup.number().required("müşteri id bilgisi girmek zorunludur"),
        orderDate: Yup.string()
    })

    function controlCustomer(values) {
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].customerId === values.customerId) {
                return true;
            }
        }
        return false;
    }

    function controlProduct(values) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].productId === values.productId) {
                return true;
            }
        }
        return false;
    }

    function addToSystem(values) {
        if (controlCustomer(values) === false) {
            alert("Girilen bilgilere ait bir müşteri sistemde bulunamadı , tekrar deneyiniz...");
            window.location.href = "/order/add";
            return;
        }

        if (!controlProduct(values) === false) {
            alert("Girilen bilgilere ait bir ürün sistemde bulunamadı , tekrar deneyiniz...");
            window.location.href = "/order/add";
            return;
        }
        values.orderId = orders.length + 1;
        values.isDelivered = false;
        console.log(values);
        orderService.addOrder(values);
        alert("Sipariş Eklendi");
        window.location.href = "/orders";
    }

    return (
        <div className='operationsform'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    { addToSystem(values) }
                }}>
                <Card className='shadow-lg p-4'>
                    <Card.Title>Sipariş Ekleme Formu</Card.Title>
                    <Card.Body>
                        <Form className='bt-form'>
                            <FormGroup className='mb-3'>
                                <Field
                                    type="number"
                                    name="orderProductId"
                                    placeholder="ürün id bilgisi"
                                    required>
                                </Field>
                            </FormGroup>
                            <FormGroup className='mb-3'>
                                <Field
                                    type="number"
                                    name="customerId"
                                    placeholder="müşteri id bilgisi"
                                    required>
                                </Field>
                            </FormGroup>
                            <FormGroup className='mb-3'>
                                <Field
                                    size="50"
                                    type="Date"
                                    name="orderDate"
                                    placeholder="sipariş tarihi"
                                    required>
                                </Field>
                            </FormGroup>
                            <Button type="submit" variant='success'>Siparişi Ekle</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Formik>

            <Row><Col id="backorderadd"><Link to="/operations"><MdOutlineArrowBack/></Link></Col></Row>
        </div>
    )
}
