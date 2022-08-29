import React from 'react'
import { Alert, Card } from 'react-bootstrap'
import PageFooterNew from '../PageFooterNew'

export default function EMutabakat() {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://www.mysoft.com.tr/Content/Images/mysoft-e-mutabakat.jpg" id="emutabakatfoto" />
                <Card.Body>
                    <Card.Text className='text-start'>
                        <h4>BA/BS Mutabakatı Nedir?</h4>
                        <p>
                        Mükelleflerin (Form BA) ve (Form BS) verilerini vergi dairesine göndermeden önce karşı tarafla mutabakat yapmalarıdır.
                        </p>
                        <h4>Mysoft e-Mutabakat Ne Yapar?</h4>
                        <p>
                        Mysoft e-Mutabakat, BA ve BS mutabakatlarını internet üzerinden yapan, mutabakat işlemlerinin daha hızlı, etkin ve ucuz yapılmasını sağlayan, izlenebilirlik sağlamak üzere tasarlanmış yenilikçi bir uygulamadır.
                        </p>
                        <h4>Avantajları Nelerdir?</h4>
                        <p>
                        BA/BS mutabakatı, muhasebecilerin belki de en çok zamanını alan, bazen ek personele ihtiyaç duyulan maliyetli bir süreçtir. Her ay sonu firmaları tek tek aramak zorunda kalmayacak, mutabakatlarınızı daha hızlı, etkin ve ucuz yapabilirsiniz.
                        </p>
                        <ul>
                            <li>Tek adımda binlerce mutabakat işlemini gerçekleştirebileceksiniz.</li>
                            <li>Telefon ,faks ve e-posta için ayırdığınız zaman ve iş gücü kaybını ortadan kaldırabilecek, maliyetlerinizi azaltabileceksiniz</li>
                            <li>İzlenebilirlik sağlayabileceksiniz.</li>
                            <li>Faturalar arasında kaybolmayacaksınız.</li>
                            <li>Bildirimlerinizi gönül rahatlığıyla vermenin keyfini yaşayacaksınız.</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
            <PageFooterNew></PageFooterNew>
        </div>
    )
}
