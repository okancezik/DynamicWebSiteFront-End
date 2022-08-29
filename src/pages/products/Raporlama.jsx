import React from 'react'
import { Card } from 'react-bootstrap'
import PageFooterNew from '../PageFooterNew'

export default function Raporlama() {
    return (
        <div>
            <Card>
                <Card.Img src='https://www.mysoft.com.tr/Content/Images/mysoft-mdw.jpg' id="raporlamafoto"></Card.Img>
                <Card.Body>
                    <Card.Text className='text-start'>
                        <h4>Crystal Reports Nedir?</h4>
                        <p><strong>Crystal Reports</strong>  çok sayıda veritabanı ile uyumlu çalışan bir raporlama aracıdır. Rapor çıktılarını çok farklı formatlarda (pdf, xls, xml ) verebilmektedir.</p><br/>

                        <h4>Crystal Reports Raporları Otomatik Nasıl Gönderilir?</h4>
                        <p>
                            <strong>Mysoft MDW, Crystal Reports</strong> dosyalarını database ortamında tutarak bu rapor dosyalarınızı görüntüleme, gerekli noktalara, belirlediğiniz formatta ve zamanda gönderen dinamik, esnek, işlevsel ve sezgisel bir otomasyon yazılımıdır.
                            <strong>MDW </strong>aynı zamanda esnek arayüzü ile kullanıcıların <strong>Crystal Reports raporlarını</strong> kullanarak dashboardlar oluşturmasını sağlar. <strong>MDW</strong>, iş verimliliğine kullanıldığı ilk günden itibaren yüksek katkılar sağlayarak olay ve süreç otomazisyonunu ile birlikte iş disiplininin kurumunuzda yer edinmesini sağlar.
                            <strong>MDW</strong> bu yönleri ile kendini eşsiz bir İş Yönetim Çözümü yapmaktadır
                        </p><br/>

                        <h4>MDW Özellikleri nedir?</h4>
                        <li>
                            <strong>MDW</strong>'yi <strong>saatlik, günlük, haftalık, aylık, yıllık</strong> veya özel bir zaman dilimi için görevlendirebilirsiniz. Aynı rapor belirlenen sıklıklarda, parametrelerde, formatlarda, belirlenen yerlere ulaştırılacaktır. MDW sizler için rapor zamanlamayı basit, sorunsuz ve uygun şekilde yapar.
                        </li>
                        <li><strong>MDW</strong> üzerinde hazırlanmış bir rapor çizelgesine, zaman ve sayı sınırı getirilebilir. </li>
                        <li>
                            Raporlarınızı ne zaman çalıştırmak istediğinizi, hangi formatta raporu oluşturmak istediğinizi ve kime nasıl gönderileceğini belirleyin. Report Zamanlayıcısı <strong>MDW</strong>, otomatik gönderimi sizin için yapsın.
                        </li>
                        <li>
                            MDW ayrıca belirlenen bir zaman dilimi dışında bir olay hakkında da zamanlanabilir, böylelikle gerçekleşen bir olaydan sonra rapor oluşturulup gönderilir. MDW'nin Olay Bazlı Zamanlamayıcısı ile rapor dağıtım sürecine gerçek zamanlı bir kontrol getirebilirsiniz. Örneğin; bir veri oluştuğunda, dosya değiştirildiğinde, e-mail alındığında, ya da cep telefonundan bir mesaj attığınızda MDW belirlenen raporların çalıştırılıp, sonuçlarının zamanında ve hatasız olarak gönderilmesini sağlar.
                        </li>
                    </Card.Text>
                </Card.Body>
            </Card>
            <PageFooterNew></PageFooterNew>
        </div>
    )
}
