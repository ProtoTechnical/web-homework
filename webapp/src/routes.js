import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { PieChart } from './components/Chart'
import { Settings } from './components/Settings'
import { NavBar } from './components/NavBar'

export const RomanNumeralContext = createContext({
  roman: false,
  setRoman: () => {}
})
export const i18nContext = createContext({
  i18n: false,
  seti18n: () => {}
})

function AppRouter () {
  const [roman, setRoman] = useState(false)
  const [i18n, seti18n] = useState(false)
  return (
    <Router>
      <RomanNumeralContext.Provider value={{ roman, setRoman }}>
        <i18nContext.Provider value={{ i18n, seti18n }}>
          <NavBar />
          <div className='main-content' css={contentStyle}>
            <Route component={Home} exact path='/' />
            <Route component={PieChart} exact path='/Chart' />
            <Route component={Settings} exact path='/Settings' />
            <Route component={() => (<div>Content for /Add route</div>)} exact path='/add' />
          </div>
        </i18nContext.Provider>
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
