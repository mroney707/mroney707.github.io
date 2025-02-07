import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features171.css'

const Features171 = (props) => {
  return (
    <div
      className={`features171-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features171-max-width thq-section-max-width">
        <div className="features171-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features171-placeholder-image"
          />
        </div>
        <div className="features171-content1">
          <div className="features171-section-title">
            <div className="features171-content2">
              <h2 className="thq-heading-2 features171-text1">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features171-text3">
                      Advanced Analytics Tools
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large features171-text2">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features171-text4">
                      Access a suite of advanced analytics tools to analyze data
                      and uncover actionable insights for informed
                      decision-making.
                    </span>
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

Features171.defaultProps = {
  feature1ImageSrc:
    'Scout My Collections Screen.png',
  feature1Title: undefined,
  feature1Description: undefined,
  rootClassName: '',
  feature1ImageAlt: 'My Collections',
}

Features171.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features171

