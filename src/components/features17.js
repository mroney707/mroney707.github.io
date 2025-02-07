import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div className="features17-layout349 thq-section-padding">
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features17-placeholder-image thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content1">
          <div className="features17-section-title">
            <div className="features17-content2">
              <h2 className="thq-heading-2 features17-text1">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features17-text3">Prop Content</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large features17-text2">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features17-text4">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1ImageSrc:
    'Scout Add Product Screen.png',
  feature1Title: undefined,
  feature1ImageAlt: 'Add Product',
  feature1Description: undefined,
}

Features17.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default Features17

