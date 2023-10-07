import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/logo.png";
import Router from "react-router-dom/es/Router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    // const [{ basket, user }, dispatch] = useStateValue();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home"><img
                    className="header__logo"
                    src={HeaderLogo}
                    alt={"Logo"}
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/login">Sign In</Nav.Link>
                        <Nav.Link href="/product">Products</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;