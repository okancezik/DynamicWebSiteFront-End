import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Operations from '../../layouts/Operations';

export default function OperationPage() {
  return (
    <div>
        <Container>
            <Row>
                <Col xs = {2}><Operations></Operations></Col>
                <Col></Col>
            </Row>
        </Container>
    </div>
  )
}
