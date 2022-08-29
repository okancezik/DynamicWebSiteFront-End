import React from 'react'
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import PageFooterNew from './PageFooterNew';

export default function Kurumsal() {

    return (
        <div>
            <Card>
                <Card.Header>KURUMSAL</Card.Header>
                <Card.Body>
                    <CardImg src="https://www.mysoft.com.tr/Content/Images/teknopark-cephe.jpg" height="450"></CardImg>
                    <Card.Title>MYSOFT DİJİTAL DÖNÜŞÜM HAKKINDA</Card.Title>
                    <Card.Text>
                        Mysoft Dijital Dönüşüm A.Ş. bilişim sektöründe deneyimli bir ekibin bir araya gelmesiyle dijital dönüşüm alanında hizmet vermek üzere 2008 yılında kurulmuştur.
                        Genç ve dinamik ekibimiz ile firmaların dijital gelişimine destek olmak ve yüksek teknoloji yazılımlarının entegrasyonu ile ihtiyaçlarına cevap verebilmek ve süreçlerini geliştirmek amacıyla yola çıktık.
                        Şirketlerin iş süreçlerini daha etkin ve verimli kullanmalarını sağlayan çözümler sunmaktayız.
                        Bu çözümler içerisinde şirketlerin bilgi teknolojilerine ilişkin gereksinimlerini karşılamak üzere, kurumsal yazılım çözümleri, mobil uygulamalar, sistem entegrasyonu uygulamalarının yanı sıra, süreç analizi ve tasarımı, proje yönetimi, eğitim ve sistem optimizasyon hizmetleri bulunmaktadır.
                        Yıllar geçtikçe birlikte çalıştığımız iş ortaklarımızın bize sonuna kadar güvenmesi ve yaptığımız projelerin iş ortaklarımıza olan pozitif etkilerini yüksek oranda görmek bizi çok mutlu ediyor.
                        Gelişen teknoloji ve değişen dünya bizi daha da heyecanlandırıyor. Araştırmayı ve geliştirmeyi seviyoruz. Bu yolda azimle çalışarak, yılların vermiş olduğu tecrübe, bilgi ve birikim ile sağlam adımlarla ilerlemeye devam ediyoruz.
                        Müşterilerimizin, iş ortaklarımızın sektörel ihtiyaçlarına cevap verebilmek ve gelişimine destek olmak amacıyla aynı azimle ve motivasyonla çalışmaya devam edeceğiz.
                    </Card.Text>
                </Card.Body>
            </Card>
            <PageFooterNew></PageFooterNew>
        </div>
    )
}
