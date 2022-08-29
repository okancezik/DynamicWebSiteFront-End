import React from 'react'
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Alert, ListGroup } from 'react-bootstrap';
import PageFooterNew from '../PageFooterNew';

export default function Crm() {
    return (
        <div>
            <Card className="text-start">
                <Card.Body>
                    <Alert variant='info' className='text-center'>CRM NEDİR ? </Alert>
                    <Card.Text>
                        <p><strong>CRM</strong> şirketlerin müşterileriyle etkileşimlerini yönetmek ve geliştirmek için kullandıkları strateji ve teknolojik araçlardır. <strong>CRM</strong>, müşterilerle güçlü ilişkiler kurmak ve işteki verimliliği artırmak için veri ve aksiyonların bir araya getirilmesidir. <strong>CRM</strong> kelimesi açılımı İngilizce <span><em>Customer Relationship Management</em></span> cümlesinin baş harflerinden oluşmuştur. Türkçe karşılığı <strong><span><em>Müşteri İlişkileri Yönetimi</em></span></strong> olarak tanımlanmıştır.</p>
                        <p><strong>Müşteri İlişkileri Yönetimi</strong> kurum ile müşteri arasında kurulan ilişkinin başladığı andan itibaren <strong>satış öncesi</strong> ve <strong>satış sonrası</strong> tüm aşamaları kapsayan bir süreçler bütünüdür. <strong>CRM programı</strong>, kullanıcıların, <strong>pazarlama, satış, müşteri ilişkileri</strong> ve diğer tüm operasyonel süreçlerinin yönetildiği bir otomasyondur.</p>
                    </Card.Text>
                    <br></br>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="CRM'in Faydaları">
                            <ListGroup variant="flush">
                                <h5>CRM ile İşleri Düzenli Takip Edin</h5>
                                <ListGroup.Item>Daha iyi organize olun, zamanı verimli kullanın, müşterilerinizi memnun edin.</ListGroup.Item>
                                <ListGroup.Item>Tüm müşteri aktivitelerinizi ve iletişimini tek yerden güncelleyin ve yönetin.</ListGroup.Item>
                                <ListGroup.Item>Gelen ve giden e-postalara boğulmadan müşteri adayları ve müşterileri kolayca izleyin. e-postaları kişiselleştirin ve hızlıca gönderin.</ListGroup.Item>
                                <ListGroup.Item>Tüm <strong>aktivite </strong>ve<strong> görüşme kayıtlarını</strong>, e-postları ve diğer işleri takip edin.</ListGroup.Item>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="profile" title="CRM Hakkında">
                                <h5>CRM'in Açılımı Nedir ?</h5>
                                <p><strong>Müşteri İlişkileri Yönetimi</strong> kurum ile müşteri arasında kurulan ilişkinin başladığı andan itibaren satış öncesi ve sonrası tüm aşamaları kapsayan bir süreçler bütünüdür.</p>
                                <p><strong>CRM</strong>’in özellikle iş çevrelerinde bir gereklilik olmasının temel nedenlerinden biri, hızla küreselleşen dünyanın hızlı bir şekilde gelişmesi ile birlikte yükselen <strong>rekabet </strong>ortamının artmasıdır. Küreselleşme ile birlikte diğer ülkelerden gelen <strong>rakipler</strong> bol çeşitli ürünler sunarak rakip olmaya başlamış ve<strong> pazar</strong> hakimiyetini arttırmıştır. Buna karşı firmaların iki önemli mücadele aracı ortaya çıkmıştır. Bunlardan biri kurumsal süreçlerde CRM’i doğru ve başarılı bir şekilde uygulamak diğeri ise teknolojiyi kullanarak, <strong>müşteri ihtiyaçlarını </strong>iyi analiz etmek, verilerini kayıt altına almak,<strong> müşteriye </strong>anında cevap verebilmek, aynı zamanda üretim ve hizmet maliyetlerini düşürmektir.</p>
                                <p>Araştırmalar <strong>yeni müşteri kazanım</strong> maliyetlerinin, <strong>müşteriyi elde tutma</strong> maliyetinden 5 kat daha fazla olduğunu ortaya çıkarmıştır. Yapılan araştırmalarda mevcut cironunun büyük bir çoğunluğunun mevcut ve<strong> sadık müşteriler</strong> tarafından yapıldığı tespit edilmiştir. Bu nedenle<strong> CRM </strong>olgusu içerisinde mevcut müşteri yönetim maliyetleri çok daha düşüktür. Var olan müşteri ile ilişkiyi devam ettirmenin ve sadık müşteriler kazanımının önemini bu veriler ortaya koymaktadır.</p>
                                <p>Müşteri ilişkilerini geliştirmek, müşteri istek ve şikayetlerine gerekli özeni göstermek, müşteri davranışlarındaki eğilimleri belirleyerek başarıyı maksimum seviyeye çıkarmak <strong>CRM</strong>'in en temel amacıdır.</p>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
            <br/>
            <PageFooterNew></PageFooterNew>
        </div >
    )
}
