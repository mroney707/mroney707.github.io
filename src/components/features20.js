import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features20.css'

const Features20 = (props) => {
  return (
    <div
      className={`features20-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features20-max-width thq-section-max-width">
        <div className="features20-content1">
          <div className="features20-section-title">
            <div className="features20-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features20-text6">Powerful Analytics</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features20-text5">
                      Launch Party Photos
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features20-actions">
              <button className="features20-button1 thq-button-filled">
                <span className="thq-body-small">
                  {props.feature1Action1 ?? (
                    <Fragment>
                      <span className="features20-text3">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="features20-button2 thq-button-outline">
                <span className="thq-body-small">
                  {props.feature1Action2 ?? (
                    <Fragment>
                      <span className="features20-text4">Request Demo</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="features20-image-container">
          <img
            alt={props.feature1ImageAlt}
            src="Beta Launch.png"
            className="features20-placeholder-image thq-img-ratio-16-9"
          />
            <img
            alt={props.feature1ImageAlt}
            src="Scout Beta Launch (Chicago) - 5.PNG"
            className="features20-placeholder-image thq-img-ratio-16-9"
          />
            <img
            alt={props.feature1ImageAlt}
            src="Jimmy Choos.JPG"
            className="features20-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features20.defaultProps = {
  feature1Action1: undefined,
  feature1Action2: undefined,
  feature1Description: undefined,
  feature1ImageAlt: 'Home Screen',
  feature1Title: undefined,
  feature1ImageSrc:
    'Scout Home Screen.png',
  rootClassName: '',
}

Features20.propTypes = {
  feature1Action1: PropTypes.element,
  feature1Action2: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Features20

