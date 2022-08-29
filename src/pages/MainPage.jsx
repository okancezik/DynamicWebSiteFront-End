import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import ProductList from './ProductList';


export default function MainPage() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://www.mysoft.com.tr/Content/Images/mysoft-iys-slide2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h3 variant="dark"><strong>İYS İlk İş ortağı Mysoft ile</strong></h3>
                            <h3><strong>KVKK ve ETK İzinlerinizi Kolayca Yönetin </strong></h3>
                            <h4><a className="btn" href="/Iys">DAHA FAZLA BİLGİ</a></h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://www.mysoft.com.tr/Content/Images/mysoft-lonca-slide-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="col-md-9">
                            <h3><strong><span variant="light" ><span variant="light">e-Fatura </span><span variant="light"> e-Arşiv </span> <span variant="light"> e-İrsaliye </span></span></strong><span variant="light"><strong><br /></strong></span></h3>
                            <h3><span variant="light"><strong>Ön Muhasebe </strong></span></h3>
                            <h4><a className="btn" href="/e-belge">DAHA FAZLA BİLGİ</a></h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.mysoft.com.tr/Content/Images/mysoft-crm-cargo-slide.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="col-md-9">
                            <h3><strong>SİZİ ANLAYAN CRM </strong></h3>
                            <h3><strong>Müşteri İlişkileri Yönetimi</strong></h3>
                            <h4><a className="btn" href="/crm">DAHA FAZLA BİLGİ</a></h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row>
                <br></br><br></br>
                <ProductList></ProductList>
            </Row>
        </div>
    )
}
