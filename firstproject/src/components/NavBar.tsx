import React from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
    return (

        <>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><NavLink to={"/dashboard"}>Dashboard</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to={"/profile"}>Profile</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to={"/settings"}>Settings</NavLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* <a href='/dashboard'>Dashboard</a>
        <a href='/login'>Login</a>
        <a href='/profile'>Profile</a>
        <a href='/settings'>Settings</a> */}
        </>

    )
}

export default NavBar