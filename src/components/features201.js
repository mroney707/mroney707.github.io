import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features201.css'

const Features201 = (props) => {
  return (
    <div
      className={`features201-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features201-max-width thq-section-max-width">
        <div className="features201-content1">
          <div className="features201-section-title">
            <div className="features201-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features201-text5">
                      Advanced Analytics Tools
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="features201-text2 thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features201-text4">
                      Access powerful analytics tools to gain valuable
                      data-driven insights for informed decision-making.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features201-actions">
              <button className="features201-button thq-button-filled">
                <span className="thq-body-small">
                  {props.feature1Action1 ?? (
                    <Fragment>
                      <span className="features201-text3">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
              {props.feature1Action2 && (
                <button className="features201-button2 thq-button-filled">
                  <span className="thq-body-small">
                    {props.feature1Action2}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="features201-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features201-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features201.defaultProps = {
  feature1Action1: undefined,
  feature1Description: undefined,
  rootClassName: '',
  feature1Title: undefined,
  feature1ImageSrc:
    'Scout Product Screen.png',
  feature1ImageAlt: 'Product Profile',
}

Features201.propTypes = {
  feature1Action1: PropTypes.element,
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features201

