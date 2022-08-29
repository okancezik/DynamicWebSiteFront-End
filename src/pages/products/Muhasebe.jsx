import React from 'react'
import { Alert, Card, ListGroup, ListGroupItem, Tab, Table } from 'react-bootstrap'
import PageFooterNew from '../PageFooterNew'

export default function Muhasebe() {
  return (
    <div>
        <Card>
            <Card.Body>
                <Alert variant='info'>Lonca Ön Muhasebe Programı Nedir?</Alert>
                <Card.Text className='text-start'>
                <p><strong>Lonca Ön Muhasebe Programı</strong> hem mobil hem web den <strong>bulut</strong> ortamında kullanabildiğiniz,<strong>e-Belge</strong> uygulamarı olan <strong>e-Fatura</strong>, <strong>e-Arşiv Fatura</strong>, <strong>e-İrsaliye</strong>, <strong>e-Defter</strong>, <strong>e-SMM</strong>, <strong>e-MM</strong> uygulamaları ile bütünleşik çalışan inovatif, kullanımı kolay <strong>ön muhasebe</strong> tutmayı sağlayan iş uygulamasıdır.</p>
                <hr/>
                <Table className='text-start'>
                    <ListGroup>
                    <Alert className = "text-center" variant='info'>Ön Muhasebe Programının Özellikleri Nedir?</Alert>
                        <ListGroup.Item>*Temel düzeyde internet kullanan herkes,  lonca online ön muhasebe programını kolaylıkla kullanabilir.</ListGroup.Item>
                        <ListGroup.Item>*Lonca ön muhasebe programı sürekli kendini günceller. Güncellemelerden herhangi bir ücret talep edilmez.</ListGroup.Item>
                        <ListGroup.Item>*İnternet tabanlı muhasebe programı olduğu için internetin olduğu her yerden muhasebe işlerinizi rahatlıkla yapabilirsiniz.</ListGroup.Item>
                        <ListGroup.Item>*Excel'deki verilerinizi kolaylıkla sisteme aktarabilirsiniz.</ListGroup.Item>
                        <ListGroup.Item>*Tüm e-Belgeleri e-Fatura, e-Arşiv Fatura, e-İrsaliye, e-SMM, e-MM  düzenleyebilir, müşterinize gönderebilir ve alabilirsiniz.</ListGroup.Item>
                        <ListGroup.Item>*Masaüstü programlardan farklı olarak donanım ve yazılım yatırımı gerektirmez. İnternetin olduğu her cihazdan sisteme giriş sağlarsınız.</ListGroup.Item>
                        <ListGroup.Item>*Verileriniz güvenle saklanır, yedekleme için ayrıca bir yatırım yapmanıza gerek kalmaz.</ListGroup.Item>
                        <ListGroup.Item>*Lonca ön muhasebe programı, Türkiye Vergi Mevzuatına göre geliştirilmiştir</ListGroup.Item>
                        <ListGroup.Item>*5000-30000 portalı entegrasyonu</ListGroup.Item>
                        <ListGroup.Item>*Ödeme kuruluşları entegrasyonu</ListGroup.Item>
                        <ListGroup.Item>*Pazaryerleri entegrasyonu</ListGroup.Item>
                        <ListGroup.Item>*Sisteme birden çok kullanıcı atayabilirsiniz. Raporlar oluşturabilirsiniz.</ListGroup.Item>
                        <ListGroup.Item>*Mysoft'un 7/24 destek hizmetinden faydalanabilirsiniz.</ListGroup.Item>
                    </ListGroup>
                </Table>
                </Card.Text>
            </Card.Body>
        </Card>
        <PageFooterNew></PageFooterNew>
    </div>
  )
}
