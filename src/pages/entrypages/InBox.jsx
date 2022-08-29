import React , {useState, useEffect} from 'react'
import { Alert, Col, Container, Row,Table } from 'react-bootstrap'
import Operations from '../../layouts/Operations'
import MessageService from '../../services/messageService'
import {FcOk} from "react-icons/fc";

export default function InBox() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        let messageService = new MessageService();
        messageService.getMessages().then(result => setMessages(result.data.data))
    }, []);
    

    return (
        <div>
            <Container className='lists'>
                <Row>
                    <Col xs={2}><Operations></Operations></Col>
                    <Col>
                    <Alert variant='dark'>Gelen Kutusu</Alert>
                        <Table striped bordered hover variant="light" className='shadow-lg p-4'>
                            <thead>
                                <th>Kimden</th>
                                <th>Mail Adres</th>
                                <th>Telefon</th>
                                <th>Mesaj</th>
                                <th>Durum</th>
                            </thead>
                            <tbody>{
                                messages.map((message)=>(
                                    <tr>
                                        <td>{message.senderName}</td>
                                        <td>{message.mailAddress}</td>
                                        <td>{message.phoneNumber}</td>
                                        <td>{message.inMessage}</td>
                                        <td><FcOk></FcOk></td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
