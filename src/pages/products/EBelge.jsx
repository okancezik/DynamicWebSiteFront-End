import React from 'react'
import { Alert, ListGroup, ListGroupItem, Tab, Table, Tabs } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PageFooterNew from '../PageFooterNew';


export default function EBelge() {
  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Alert variant='info'>E-BELGE NEDİR ? </Alert>
          <Card.Text className='text-start'>
            <p>Ülkemizde <strong>e-Belge</strong> denildiğinde Maliye Bakanlığı Gelir İdaresi Başkanlığınca hayata geçirilen <strong>e-Fatura</strong>, <strong>e-Arşiv Fatura</strong>, <strong>e-İrsaliye</strong>, <strong>e-Defter</strong>, <strong>e-Bilet</strong>, <strong>-e-Serbest Meslek Makbuzu (e-SMM)</strong>,<strong>e-Müstahsil Makbuzu (e-MM)</strong> gibi<strong> dijital dönüşüm </strong>uygulamalarına verilen  üst başlık adıdır.</p>
            <p><strong>e-Belge uygulamaları</strong>, Gelir İdaresi Başkanlığı (<strong>GİB</strong>)'nın belirlediği standartlarda hazırlanarak<strong> GİB</strong>'e iletilir.  Mükellefler<strong> muhasebe programları</strong>yada <strong>GİB</strong> yada <strong>özel entegratörler</strong>sunulan <strong>portal</strong> aracılığı ile GİB'e istenilen zaman periyotlarında e-belgelerini gönderebilir.</p>
            <p><strong><span>Mysoft Dijital Dönüşüm A.Ş. Gelir İdaresi Başkanlığı(GİB) onaylı </span><span>özel entegratördür
            </span></strong></p><hr />
            <Table className='text-start'>
              <ListGroup variant="flush">
                <ListGroup.Item>e-Fatura</ListGroup.Item>
                <ListGroup.Item>e-İrsaliye</ListGroup.Item>
                <ListGroup.Item>e-Döviz Alım Satım Belgesi</ListGroup.Item>
                <ListGroup.Item>e-Bilet</ListGroup.Item>
                <ListGroup.Item>e-Arşiv Fatura</ListGroup.Item>
                <ListGroup.Item>e-Müstahsil Makbuzu (e-MM)</ListGroup.Item>
                <ListGroup.Item>e-Sigorta Poliçesi</ListGroup.Item>
                <ListGroup.Item>e-Defter</ListGroup.Item>
                <ListGroup.Item>e-Serbest Meslek Makbuzu</ListGroup.Item>
              </ListGroup>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
      <PageFooterNew></PageFooterNew>
    </div>
  )
}
