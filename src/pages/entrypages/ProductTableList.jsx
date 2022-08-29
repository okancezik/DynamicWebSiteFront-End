import React from 'react';
import { useState, useEffect } from 'react';
import Operations from '../../layouts/Operations';
import ProductService from '../../services/productService';
import { MdOutlineDescription } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import { ImImage, ImListNumbered } from "react-icons/im";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default function ProductTableList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then(result => setProducts(result.data.data))
    }, []);

    return (
        <div>
            <Container className='lists'>
                <Row>
                    <Col xs={2}><Operations></Operations></Col>
                    <Col>
                        <Table striped bordered hover variant="light" className="shadow-lg p-4">
                            <thead>
                                <tr>
                                    <th><ImListNumbered /></th>
                                    <th>Ürün</th>
                                    <th>Ürün açıklaması <MdOutlineDescription /></th>
                                    <th><ImImage /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product) => (
                                        <tr>
                                            <td>{product.productId}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.productDescription}</td>
                                            <td>{product.productImagine}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col><br /><Link to="/product/add"><BsFillPlusSquareFill /></Link></Col>
                </Row>
                <br/>
            </Container>
        </div>
    )
}
