import * as React from 'react'

import image from '../../images/jonpreece.png'
import styles from './styles.module.scss'

function Header() {
  return (
    <div className={`${styles.banner} pt-lg-4 pb-3 pb-lg-5 mb-3`}>
      <div className={`${styles.container} container`}>
        <img className="rounded mb-3 mb-md-0" src={image} alt="Jon Preece" />
        <div className="ml-md-3 d-flex flex-column justify-content-center">
          <div>
            <p className={`${styles.text} ${styles.large}`}>
              I am a developer, speaker, writer, and teacher.
            </p>
          </div>
          <div>
            <p className={`${styles.text} ${styles.small} d-none d-lg-block`}>
              Hire me to build you a website, teach you to code, or speak at your event.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
