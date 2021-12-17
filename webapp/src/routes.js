import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { PieChart } from './components/Chart'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function AppRouter () {
  return (
    <Router>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='/'><i>TransactionBase</i></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/Chart'>Chart</Nav.Link>
              <Nav.Link href='/Settings'>Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='main-content' css={contentStyle}>
        <Route component={Home} exact path='/' />
        <Route component={PieChart} exact path='/Chart' />
        <Route component={() => (<div>Content for /Settings route</div>)} exact path='/Settings' />
        <Route component={() => (<div>Content for /Add route</div>)} exact path='/add' />
      </div>
    </Router>
  )
}

export default AppRouter

const contentStyle = css`
  grid-row: 2;
`
