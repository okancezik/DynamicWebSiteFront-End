import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {Col, FormGroup, Row} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductService from '../../services/productService';
import { Link } from 'react-router-dom';
import {MdOutlineArrowBack} from "react-icons/md";

export default function ProductAdd() {
    const initialValues = {productId : null,productName: "", productDescription: "", productImagine: "" }; //formun ilk değerleri

    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])
    

    //form elemanları için validation kuralları
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunludur"),
        productDescription: Yup.string().required("Ürün açıklaması zorunludur"),
        productImagine: Yup.string()
    })

    function addToSystem(values) {
        let productAddService = new ProductService()
        productAddService.addProduct(values);
        alert('Ürün Eklendi...');
        window.location.href = '/products/table';
    }
    
    return (
        <div className='operationsform'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {   //values form icindeki field'lerden gelen değerlerdir
                    values.productId = products.length + 1;
                    addToSystem(values);
                    console.log(values);
                }
                }
            >
                <Card className='shadow-lg p-4'>
                    <Card.Title >Ürün Ekleme Formu</Card.Title>
                    <Card.Body>
                        <Form className='bt-form'>
                            <FormGroup className="mb-3">
                                <Field type="text" size="35" name="productName" placeholder="Ürün adı" ></Field>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Field type="textarea" size="35" name="productDescription" placeholder="Ürün açıklaması" ></Field>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Field type="text" size="35" name="productImagine" placeholder="Ürün resim adresi" ></Field>
                            </FormGroup>
                            <Button variant="success" type="submit">Ürünü Ekle</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Formik>
            <Row><Col id='backprdctadd'><Link to = "/operations"><MdOutlineArrowBack/></Link></Col></Row>
        </div>
    )
}
