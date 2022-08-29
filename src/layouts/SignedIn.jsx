import React from 'react'
import Button from 'react-bootstrap/Button';
import {AiOutlineLogin} from "react-icons/ai";

export default function SignedIn(props) {
  return (
    <div>
        <Button variant="outline-danger" icon="sign-out" onClick={props.signOut}>
          Çıkış
        </Button>
    </div>
  )
}
