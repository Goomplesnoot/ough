import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import PostService from './postService';

const Header = () => {
    return (
        
            <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">Home</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/register" className="text-decoration-none text-light mx-2">Register</NavLink>
                    </Nav>
                    <NavLink to='/postService' className="text-decoration-none text-light mx-2">Post Service</NavLink>
                </Container>
            </Navbar>
        
    )
}

export default Header