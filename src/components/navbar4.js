import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className={`navbar4-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar4-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links1">
            <a
              href={props.link1Url}
              className="navbar4-link11 thq-body-small thq-link"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar4-text1">Home</span>
                </Fragment>
              )}
            </a>
            <a
              href={props.link2Url}
              className="navbar4-link21 thq-body-small thq-link"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar4-text2">About Us</span>
                </Fragment>
              )}
            </a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links2">
              <a href={props.link1Url} className="thq-body-small thq-link">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar4-text1">Home</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-body-small thq-link">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar4-text2">About Us</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
          <div className="navbar4-buttons2">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  link1: undefined,
  link5Url: '/home',
  link2: undefined,
  link3Url: '/home',
  link5: undefined,
  logoAlt: 'Company Logo',
  logoSrc: 'Scout Main Logo.png',
  link4Url: '/home',
  link4: undefined,
  rootClassName: '',
  link3: undefined,
  link1Url: '/home',
  link2Url: '/our-story',
}

Navbar4.propTypes = {
  link1: PropTypes.element,
  link5Url: PropTypes.string,
  link2: PropTypes.element,
  link3Url: PropTypes.string,
  link5: PropTypes.element,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link4Url: PropTypes.string,
  link4: PropTypes.element,
  rootClassName: PropTypes.string,
  link3: PropTypes.element,
  link1Url: PropTypes.string,
  link2Url: PropTypes.string,
}

export default Navbar4

