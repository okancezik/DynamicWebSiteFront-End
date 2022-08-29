import React from 'react'
import { Alert, Card } from 'react-bootstrap'

export default function Kvkk() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Alert variant='info'>KVKK Açık Rıza Onay Yönetimi</Alert>
                    <Card.Text className='text-start'>
                        <p>
                            Açık Rıza Onaylayınızı Mysoft Açık Rıza Onay Yönetim Sistemi ürünümüzle kolayca yönetebilir, zaman damgalı olarak çift doğrulama yöntemi ile izinlerinizi güvenle toplayıp saklayabilirsiniz. Aynı anda hem KVKK hemde ETK (Arama,Sms,Mail) izinlerinizi toplayabilirsiniz. ETK izinleriniz otomatik olarak İleti Yönetim Sistemi (İYS) gönderim yapılır.
                        </p>
                        <br />
                        <ul>
                            <li>Sınırsız sayıda izin şablonu oluşturun.</li>
                            <li>Mail ya da SMS'den link/kısa link ile izin talebi gönderin</li>
                            <li>KVKK ve ETK izinlerini ayrı ayrı yada birlikte alın</li>
                            <li>ETK izinlerini marka, mesaj, arama bazında ayrı ayrı yada birlikte alın</li>
                            <li>İleti Yönetim Sistemi ile tam entegre olartak kullanın</li>
                            <li>TÜBİTAK Zaman damgalı olarak tüm izinlerinizi saklayın</li>
                            <li>API desteği ile tüm dış uygulamalarınıza entegre edin</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
