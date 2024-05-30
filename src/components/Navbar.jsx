import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Nav, Modal, Offcanvas, Button, Navbar } from 'react-bootstrap';
import '../App.css'



export default function NavbarHome() {

    const [searchTerm, setSearchTerm] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <Navbar expand="lg" className='sticky-top bg-info' style={{ minHeight: '2cm',boxShadow: '0 0 4px 0.2px #333',}}>
            <Container fluid>
                <Link className='navbar-brand' to='/'>
                    <span id='logo' className='text-light'>Tech-Tools</span>
                </Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                    className='bg-info'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            <span className='heading' style={{ color: '#363636' }}>Tech-Tools</span>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto my-1" style={{ maxHeight: '90px' }}>
                            <Button variant='outline-light' className='heading' onClick={handleShow} style={{ border: 'none', textDecoration:'none',color: '#59515E' }}>Branches</Button>
                            <Link to='/languages' className='heading btn btn-outline-light' style={{ color: '#59515E', textDecoration:'none' }}>Languages</Link>
                        </Nav >

                        <Form className="d-flex" onSubmit={handleSubmit} style={{ alignItems: 'center' }}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value) }}
                            />
                            <button className='heading btn btn-outline-secondary' style={{ textDecoration:'none'}}>Search</button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas >
            </Container >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='heading text-primary'>Select a Branch : </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-warning'>
                    <Link to='/cse' onClick={handleClose} className='btn btn-group' >CSE</Link>
                    <Link to='/ece' onClick={handleClose} className='btn btn-group'>ECE</Link>
                    <Link to='/eee' onClick={handleClose} className='btn btn-group'>EEE</Link>
                    <Link to='/civil' onClick={handleClose} className='btn btn-group'>CIVIL</Link>
                    <Link to='/mech' onClick={handleClose} className='btn btn-group'>MECH</Link>
                    <Link to='/chem' onClick={handleClose} className='btn btn-group'>CHEM</Link>
                </Modal.Body>

            </Modal>

        </Navbar >
    );
}