import React from 'react'
import { Alert } from 'react-bootstrap'
import {BsFillTelephonePlusFill} from "react-icons/bs";
import {FaEnvelope} from "react-icons/fa";

export default function PageFooterNew() {
    return (
        <div id = "pagefooter">
            <br/>
            <Alert variant="info">
                {/* <Alert.Heading>Hey, nice to see you</Alert.Heading> */}
                <h3>Hizmet verdiğimiz çok sayıda global ve yerli <br>
                </br><strong>referanslarımız</strong> için bilgilerinizi bırakın sizi arayalım.</h3><br />
                <strong><BsFillTelephonePlusFill />   0 (212) 901 0212  </strong> | <strong><FaEnvelope />  info@mysoft.com.tr</strong>
            </Alert>
        </div>
    )
}
