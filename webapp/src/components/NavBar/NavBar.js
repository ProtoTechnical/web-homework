import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { StringProc } from '../StringProc'
import { Link } from 'react-router-dom'

export function NavBar () {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/'><i>{StringProc('TransactionBase')}</i></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>{StringProc('Home')}</Nav.Link>
            <Nav.Link as={Link} to='/Chart'>{StringProc('Chart')}</Nav.Link>
            <Nav.Link as={Link} to='/Settings'>{StringProc('Settings')}</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
