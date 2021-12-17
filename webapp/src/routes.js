import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { PieChart } from './components/Chart'
import { Settings } from './components/Settings'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const RomanNumeralContext = createContext({
  roman: false,
  setRoman: () => {}
})

function AppRouter () {
  const [roman, setRoman] = useState(false)
  return (
    <Router>
      <RomanNumeralContext.Provider value={{ roman, setRoman }}>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Brand as={Link} to='/'><i>TransactionBase</i></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/Chart'>Chart</Nav.Link>
                <Nav.Link as={Link} to='/Settings'>Settings</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={PieChart} exact path='/Chart' />
          <Route component={Settings} exact path='/Settings' />
          <Route component={() => (<div>Content for /Add route</div>)} exact path='/add' />
        </div>
      </RomanNumeralContext.Provider>
    </Router>
  )
}

export default AppRouter

const contentStyle = css`
  grid-row: 2;
  margin: 4rem;
  margin-top: 2rem;
`
