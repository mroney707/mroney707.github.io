import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features193.css'

const Features193 = (props) => {
  return (
    <div className="features193-layout349 thq-section-padding">
      <div className="features193-max-width thq-section-max-width">
        <div className="features193-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features193-content1">
          <div className="features193-section-title">
            <span className="thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features193-text5">
                    Unlock valuable insights with powerful analytics
                  </span>
                </Fragment>
              )}
            </span>
            <div className="features193-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features193-text7">Prop Content</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features193-text8">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features193-actions">
              <button className="features193-button1 thq-button-filled">
                <span className="thq-body-small">
                  {props.feature1Action1 ?? (
                    <Fragment>
                      <span className="features193-text4">
                        Advanced data visualization tools
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="features193-button2 thq-button-outline">
                <span className="thq-body-small">
                  {props.feature1Action2 ?? (
                    <Fragment>
                      <span className="features193-text6">
                        Predictive analytics for informed decision-making
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features193.defaultProps = {
  feature1Action1: undefined,
  feature1Slogan: undefined,
  feature1Action2: undefined,
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1581094025024-648fbcaf4fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExODM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature1ImageAlt: 'Data Visualization Image',
}

Features193.propTypes = {
  feature1Action1: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1Action2: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
}

export default Features193

