import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Col, FormGroup, Row} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductService from '../../services/productService';
import {MdOutlineArrowBack} from "react-icons/md";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function ProductDelete() {

    let productService = new ProductService();

    const [products, setProducts] = useState([])

    useEffect(() => {
        productService.getProducts().then(result=>setProducts(result.data.data))
     } , []);
    

    const initialValues = { productName: "" };

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunludur")
    })

    function deleteControl(productName){
        console.log(products);
        for(let i=0;i<products.length;i++){
            if(products[i].productName === productName){
                console.log("ürün bulundu");
                return true;
            }
        }
        console.log("ürün bulunamadı");
        return false;
    }

    function deleteProduct(values) {

        //first optional operation
        // (async () => {
        //     // DELETE request using axios with async/await
        //     const element = document.querySelector('#delete-request-async-await .status');
        //     await axios.delete("https://localhost:44361/api/Products/delete?productName="+values.productName);
        // })();

        //my operation
        let result = deleteControl(values.productName);
        if(result === true){
            productService.deleteProducts(values.productName);
            alert('Ürün Sistemden Silindi...');
            window.location.href = '/products/table';
        }
        else{
            alert("Bu isimde herhangi bir ürün sistemde bulunamadı...");
            window.location.href = "/product/delete";
        }
    }

    return (
        <div className='operationsform'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {   //values form icindeki field'lerden gelen değerlerdir
                    deleteProduct(values);
                }
                }
            >
                <Card className='shadow-lg p-4'>
                    <Card.Title>Ürün Silme Formu</Card.Title>
                    <Card.Body>
                        <Form className='bt-form'>
                            <FormGroup className="mb-3">
                                <Field
                                    type="text" size = "50"
                                    name="productName"
                                    placeholder="Silinecek ürünün adı"
                                    required>
                                </Field>
                            </FormGroup>
                            <Button variant="danger" type="submit">Ürünü Sil</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Formik>
            <Row><Col id = 'backprdctdlt'><Link to="/operations"><MdOutlineArrowBack/></Link></Col></Row>
        </div>
    )
}
