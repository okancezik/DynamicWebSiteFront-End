import React from 'react'
import { Card, Image } from 'react-bootstrap'
import PageFooterNew from '../PageFooterNew'

export default function Btrans() {
    return (
        <div>
            <Image src='https://www.mysoft.com.tr/Content/Images/mysoft-btransferet_1.jpg' id='btransfoto'></Image>
            <Card>
                <Card.Body className='text-start'>
                    <Card.Text>
                        <h4>BTRANS Nedir?</h4>
                        <p>Gelir İdaresi Başkanlığı Bilgi Transfer Sistemidir.</p><br />

                        <h4>İnternet Ortamında Yayınlanan İlanlar İçin BTRANS Zorunlu Oldu!</h4>
                        <p><strong>Taşınır ve taşınmazlar ile mal ve hizmetlerin alınması, satılması veya kiralanmasının temin edilmesine yönelik olarak verilen ilanların yayımlanmasına aracılık eden aracı hizmet sağlayıcıları, sosyal ağ sağlayıcıları ile yer sağlayıcılara gerçekleştirdikleri işlemlere ilişkin olarak bazı bilgileri elektronik ortamda Gelir İdaresi Başkanlığı'na bildirme zorunluluğu getirildi.</strong><br/>
                        Hazine ve Maliye Bakanlığı GİB tarafından hazırlanan 538 Sıra No'lu Vergi Usul Kanunu Genel Tebliği Resmi Gazete'de yayımlanarak yürürlüğe girdi.
                        Bu kapsamda taşınır ve taşınmazlar ile mal ve hizmetlerin alınması, satılması veya kiralanmasının temin edilmesine yönelik olarak verilen ilanların yayımlanmasına aracılık eden aracı hizmet sağlayıcıları, sosyal ağ sağlayıcıları ile yer sağlayıcılara, takvim yılının birer aylık süreleri içerisinde gerçekleştirmiş oldukları söz konusu işlemlere ilişkin olarak bazı bilgileri, Btrans aracılığıyla GİB sistemlerine bildirmeleri zorunlu oldu.</p><br />

                        <h5>Aracı hizmet sağlayıcı kimdir?</h5>
                        <p>Başkalarına ait iktisadi ve ticari faaliyetlerin yapılmasına e-Ticaret ortamını sağlayan gerçek ya da tüzel kişidir.</p><br/>

                        <h5>Yer sağlayıcı kimdir?</h5>
                        <p>Hizmet ve içerikleri barındıran sistemleri sağlayan veya işleten gerçek veya tüzel kişidir.</p><br/>

                        <h5>Sosyal ağ sağlayıcı kimdir?</h5>
                        <p>Sosyal etkileşim amacıyla kullanıcıların internet ortamında metin, görüntü, ses, konum gibi içerikleri oluşturmalarına, görüntülemelerine veya paylaşmalarına imkân sağlayan gerçek veya tüzel kişilerdir.</p>

                    </Card.Text>
                </Card.Body>
            </Card>
            <PageFooterNew></PageFooterNew>
        </div>
    )
}
