import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export default function SignedOut(props) {
    return (
        <div>
            {/* <Button icon="sign-in">Giriş Yap</Button>
            <Button icon="sign-out">Çıkış Yap</Button> */}

            <Button variant="outline-primary" icon = "sign-in" onClick={props.signIn} as={NavLink} to="/login">
                Giriş
            </Button>

        </div>
    )
}
