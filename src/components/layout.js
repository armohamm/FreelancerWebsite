import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import '../styles.scss'
import Sidebar from './sidebar'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            icon
            title
            author
            description
            twitterHandle
          }
        }
      }
    `}
    render={data => {
      const { siteMetadata } = data.site

      return (
        <div className="container-fluid main-container">
          <div className="row">
            <Sidebar
              className="col-md-4 col-xl-3 sidebar"
              icon={siteMetadata.icon}
              author={siteMetadata.author}
              siteTitle={siteMetadata.title}
              description={siteMetadata.description}
              twitterHandle={siteMetadata.twitterHandle}
            />
            <div className="col-md-8 col-xl-9" style={{ overflowY: 'scroll' }}>
              {children}
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default Layout
