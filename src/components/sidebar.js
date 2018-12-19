import * as React from 'react'
import classnames from 'classnames'

import icon from '../images/favicon.png'
import FollowOnTwitter from './followOnTwitter'

const links = [
  {
    description: 'About',
    to: 'about'
  },
  {
    description: 'Speaking & Training',
    to: 'speaking-and-training'
  },
  {
    description: 'Blog & Tutorials',
    to: 'blog-and-tutorials'
  },
  {
    description: 'Work',
    to: 'work'
  },
  {
    description: 'Contact',
    to: 'contact'
  }
]

const Sidebar = ({ author, twitterHandle, siteTitle, description, className }) => (
  <div className={classnames('text-center', className)}>
    <div>
      <img className="mt-5 mb-2" src={icon} alt={siteTitle} />
      <h1 className="mt-0" style={{ color: '#fff' }}>
        {author.toUpperCase()}
      </h1>
      <p>{description}</p>
      <ul className="list-group mt-5">
        {links.map(link => (
          <li key={link.description} className="list-group-item">
            <a className="list-group-item-action" href={`#${link.to}`}>
              {link.description.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <FollowOnTwitter twitterHandle={twitterHandle} />
    </div>
  </div>
)

Sidebar.defaultProps = {
  author: ''
}

export default Sidebar
