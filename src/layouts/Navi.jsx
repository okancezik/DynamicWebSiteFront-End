import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import UserOperatios from './UserOperatios';


export default function Navi() {
    const [isAuthenticated, setisAuthenticated] = useState(false)

    //useNavigate ile yapılan islem sonrasında dallanma yapmasını sağlar
    const navigate = useNavigate();

    function handleSignOut() {
        setisAuthenticated(false)
        navigate("/");
    }

    function handleSignIn() {
        setisAuthenticated(true)
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container id="mysoft">
                    <Navbar.Brand as={NavLink} to="/">mysoft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Ana Sayfa</Nav.Link>
                            <Nav.Link as={NavLink} to="/kurumsal">Kurumsal</Nav.Link>
                            <Nav.Link as={NavLink} to="/products">Ürünler</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Bize ulaşın</Nav.Link>
                        </Nav>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut}></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
