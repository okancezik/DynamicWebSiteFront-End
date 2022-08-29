import React, { useState, useEffect } from 'react'
import ProductService from '../services/productService';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import PageFooterNew from './PageFooterNew';

export default function ProductList() {

    const [products, setProducts] = useState([])

    // products bizim bu sayfadaki datamız ve default değeri [] boş bir array

    //component yüklendiğinde yapılmasını istediğin kodu useEffect fonksiyonu icerisine yazarız

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])

    function routerpage(productId) {
        if (productId === 1) {
            return "/crm";
        } else if (productId === 2) {
            return "/e-belge";
        } else if (productId === 3) {
            return "/on-muhasebe";
        } else if (productId === 4) {
            return "/iys";
        } else if(productId == 5){
            return "/kvkk";
        }else if(productId == 6){
            return "/e-mutabakat";
        }else if(productId == 7){
            return "/raporlama";
        }else{
            return "/btrans";
        }
    }

    return (
        <div>
            <br></br>
            <Alert variant="info" className="shadow-lg p-4" id="titleproductlist">
                ÜRÜNLER
            </Alert>
            <Row xs={1} md={3} className="g-4">
                {products.map((product) => (
                    <Col>
                        <Card className="shadow-lg p-4">
                            <Link to={routerpage(product.productId)} ><Card.Img variant="top" src={product.productImagine} /></Link>
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text>{product.productDescription}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col xs={12}><PageFooterNew></PageFooterNew></Col>
            </Row>
        </div>
    )
}
