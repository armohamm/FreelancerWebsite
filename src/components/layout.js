import * as React from 'react'

import Nav from './Nav'
import Header from './Header'
import '../styles.scss'

const Layout = ({ children }) => (
  <>
    <Nav />
    <Header />
    {children}
  </>
)

export default Layout
