import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features161.css'

const Features161 = (props) => {
  return (
    <div className="features161-layout300 thq-section-padding">
      <div className="features161-max-width thq-section-max-width">
        <div className="features161-section-title">
          <span className="features161-text10 thq-body-small">
            {props.slogan1 ?? (
              <Fragment>
                <span className="features161-text20">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="features161-content1">
            <h2 className="features161-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features161-text16">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features161-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="features161-text17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features161-content2">
          <div className="features161-row thq-flex-row">
            <div className="features161-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features161-content3">
                <h3 className="features161-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features161-text18">
                        Data Visualization
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features161-text21">
                        Interactive charts and graphs to visually represent data
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features161-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features161-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features161-text14">
                        Predictive Analytics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features161-text15">
                        Forecast trends and outcomes based on historical data
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features161-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features161-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features161-text13">
                        Custom Reporting
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features161-text19">
                        Create tailored reports to meet specific business needs
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features161.defaultProps = {
  feature2ImageAlt: 'Predictive Analytics Image',
  feature3ImageAlt: 'Custom Reporting Image',
  feature3Title: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  heading1: undefined,
  content1: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExODM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature3Description: undefined,
  slogan1: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1613442368724-5bea257f8cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExODM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1581094025024-648fbcaf4fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExODM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Data Visualization Image',
  feature1Description: undefined,
}

Features161.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  slogan1: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default Features161

