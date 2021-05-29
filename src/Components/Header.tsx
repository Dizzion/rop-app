import React from 'react';
import { Navbar } from 'react-bootstrap';
import "./Header.scss";

const Header: React.FC<any> = props => {
    return (
        <Navbar className="header" sticky="top">
            <Navbar.Brand className="name justify-content-center" href="#home">Reign of Phoenix</Navbar.Brand>
            <Navbar.Text className="name">{props.num} Members</Navbar.Text>
        </Navbar>
    );
}

export default Header;
