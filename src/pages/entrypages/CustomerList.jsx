import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { ImPhone } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { IoIosBusiness } from "react-icons/io"
import { FaFax } from "react-icons/fa";
import { ImListNumbered } from "react-icons/im";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomerService from '../../services/customerService';
import Operations from '../../layouts/Operations';

export default function CustomerList() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        let customerService = new CustomerService();
        customerService.getCustomers().then(result => setCustomers(result.data.data))
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col xs = {2}><Operations></Operations></Col>
                    <Col>
                        <Table striped bordered hover variant="light" className="shadow-lg p-4">
                            <thead>
                                <tr>
                                    <th><ImListNumbered /></th>
                                    <th><IoIosBusiness /></th>
                                    <th><RiContactsFill /></th>
                                    <th><FaEnvelope /></th>
                                    <th><ImPhone /></th>
                                    <th><FaFax /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map((customer) => (
                                        <tr>
                                            <td>{customer.customerId}</td>
                                            <td>{customer.companyName}</td>
                                            <td>{customer.contactName}</td>
                                            <td>{customer.emailAddress}</td>
                                            <td>{customer.phoneNumber}</td>
                                            <td>{customer.faxNumber}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col><br /><Link to="/customer/add"><BsFillPlusSquareFill /></Link></Col>
                </Row>

            </Container>
        </div>
    )
}
