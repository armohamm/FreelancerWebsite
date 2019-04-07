import * as React from 'react'
import favicon from '../images/favicon.png'

function Nav() {
  return (
    <nav className="site-header sticky-top py-1">
      <div className="container d-flex align-items-center">
        <img src={favicon} alt="Jon Preece" title="Jon Preece" />
        <div className="text-uppercase ml-3 mt-1 text-header">
          <h1 className="mb-1">Jon Preece</h1>
          <h2>Front-end Web Developer</h2>
        </div>
      </div>
    </nav>
  )
}

export default Nav
