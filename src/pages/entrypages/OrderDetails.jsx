import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import OrderService from '../../services/orderService';
import { IoIosBusiness } from "react-icons/io"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { ImListNumbered, ImCalendar } from "react-icons/im";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Operations from '../../layouts/Operations';
import { Container } from 'react-bootstrap';

export default function OrderDetails() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        let orderService = new OrderService();
        orderService.getOrderDetails().then(result => setOrders(result.data.data))
    }, [])

    function controlDelivered(x) {
        if (x) {
            return <td>Teslim edildi</td>
        } else {
            return <td>Teslim edilmedi</td>
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={2}><Operations></Operations></Col>
                    <Col>
                        {/* <Alert variant='dark'>
                        SİPARİŞ DETAYLARI
                    </Alert> */}
                        <Table striped bordered hover variant="light" className="shadow-lg p-4">
                            <thead>
                                <tr>
                                    <th><ImListNumbered /></th>
                                    <th>Ürün  <MdOutlineProductionQuantityLimits /></th>
                                    <th><IoIosBusiness /></th>
                                    <th><ImCalendar /></th>
                                    <th>Teslim Durumu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order) => (
                                        <tr>
                                            <td>{order.orderId}</td>
                                            <td>{order.productName}</td>
                                            <td>{order.companyName}</td>
                                            <td>{order.orderDate}</td>
                                            <td>{controlDelivered(order.orderisDelivered)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col><br /><Link to="/product/add"><BsFillPlusSquareFill /></Link></Col>
            </Row>
        </div>
    )
}
