import React from 'react'
import { Alert, Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap'
import PageFooterNew from '../PageFooterNew'

export default function Iys() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Alert className='text-center' variant='info'>İleti Yönetim Sistemi (İYS) Nedir ? </Alert>
                    <Card.Text className='text-start'>
                        <p>
                            Hizmet sağlayıcıların arama, sms, e-posta aracılığıyla ticari elektronik ileti göndermek için alıcılardan aldıkları izinleri saklayıp yönetebilecekleri, alıcıların da verdikleri izinleri görüntüleyip, reddedebilecekleri, şikayet edebilecekleri ve yönetebilecekleri, kamunun ise ileti şikayetlerini ve şikayete konu izni görüntüleyebileceği, web sitesi, kısa mesaj numarası ve çağrı merkezi üzerinden hizmet verecek, güvenlik standartlarına sahip ulusal bir veri tabanı sistemidir.

                            Kısaca, <strong>Ticari Elektronik İleti</strong> onayı alınmasına, reddetme hakkının kullanılmasına ve şikayet süreçlerinin yönetilmesine imkan tanıyan sistemdir. <strong>İYS </strong>kayıt yaptırmadan, onayı olmayan alıcılara<strong> sesli arama, e-posta ya da sms </strong> ile <strong>ticari elektronik ileti </strong>gönderilemez.

                            Ticaret Bakanlığının 23/10/2014 tarihli ve 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanuna dayanılarak Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmeliği 01.01.2021 tarihinden itibaren yürürlüğe girdi.
                        </p><hr />
                    </Card.Text>
                    <Alert className='text-center' variant='info'>Ticari Elektronik İleti Nedir?</Alert>
                    <Card.Text className='text-start'>
                        <p>
                        Gerçek ve tüzel kişilerin ticari faaliyetleri kapsamında ürün, hizmet ve işletmelerinin tanıtımını yapmak için elektronik iletişim araçlarıyla (telefon, çağrı merkezleri, faks, kısa mesaj vb.) yapılan her türlü iletişime, <strong>ticari elektronik ileti denir</strong>. Telefon, Çağrı merkezleri, Faks, Otomatik arama makineleri, Akıllı ses kaydedici sistemler, Elektronik posta Kısa mesaj hizmetidir. 
                        </p><hr/>
                    </Card.Text>
                    <Card.Text>
                        <Table>
                          <ListGroup className='text-start'>
                            <Alert className='text-center' variant='info'>Mysoft İYS Size Ne Sağlar?</Alert>
                            <ListGroup.Item>Mysoft İYS, çok farklı sistemlerde tutulan verileri tekilleştirerek İYS'ye aktarımını sağlar ve İYS süreçleri uçtan uca yönetilir.</ListGroup.Item>
                            <ListGroup.Item>Mysoft İYS Portalında çok sayıda kullanıcı tanımlanabilir ve rol bazlı yetkilendirme yapılarak kullanıcılara data görme ve kullanma yetkisi verilir.</ListGroup.Item>
                            <ListGroup.Item>İleti onayı için sisteme toplu halde istenilen formatta (excel, csv, txt) data yükleyebilir ve İYS'ye aktarım sağlayabilirsiniz.</ListGroup.Item>
                            <ListGroup.Item>Çok sayıda firmayı tek bir platform üzerinden farklı organizasyon başlıkları altında yönetebilirsiniz.</ListGroup.Item>
                            <ListGroup.Item>Mysoft'un sağladığı İYS Web Servisleri ile sınırsız sayıda data kaynağı (CRM, ERP, vb.) ile kolayca çift yönlü entegrasyon yapabilirsiniz.</ListGroup.Item>
                            <ListGroup.Item>Verileriniz TIER 3 seviyesinde veri merkezlerinde güvenle 7/24 erişilebilir şekilde saklanır.</ListGroup.Item>
                            <ListGroup.Item>Mysoft İYS'nin size sağladığı ileti izin kontrol web servisleri ile istediğiniz SMS ya da E- Posta gönderimi yapan kurumla entegre olabilir, ticari ileti maliyetlerinizi düşürebilirsiniz.</ListGroup.Item>
                            <ListGroup.Item>Mysoft İYS'nin size sağladığı ileti izin kontrol web servisleri ile istediğiniz IP Santral uygulamalarınız ile entegre olabilir, izinli olmayan telefonlar için outbound çağrı yapılmasını engelleyebilirsiniz.</ListGroup.Item>
                            <ListGroup.Item>Mysoft İYS ile İYS API'yi satin almadan entegrasyon yapabilirsiniz. Bu sayede API satınalma ve geliştirme maliyetinden tasarruf edersiniz.</ListGroup.Item>
                            <ListGroup.Item>Mysoft İYS ile ilgili mevzuatları, yapılan değişiklikleri düzenli takip eder, müşterilerini bilgilendirir ve kendi sistemlerinde gerekli güncellemeleri hızlıca gerçekleştirir.</ListGroup.Item>
                          </ListGroup>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
            <PageFooterNew></PageFooterNew>
        </div>
    )
}
