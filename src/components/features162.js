import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features162.css'

const Features162 = (props) => {
  return (
    <div
      className={`features162-layout300 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features162-max-width thq-section-max-width">
        <div className="features162-section-title">
          <span className="features162-text10 thq-body-small">
            {props.slogan1 ?? (
              <Fragment>
                <span className="features162-text14">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="features162-content1">
            <h2 className="features162-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features162-text20">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features162-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="features162-text13">
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
        <div className="features162-content2">
          <div className="features162-row thq-flex-row">
            <div className="features162-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features162-content3">
                <h3 className="features162-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features162-text21">Prop Content</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features162-text15">Prop Content</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features162-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features162-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features162-text19">
                        Customizable Dashboards
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features162-text17">
                        Create personalized dashboards tailored to your specific
                        business needs and preferences.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features162-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features162-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features162-text18">
                        Real-time Data Monitoring
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features162-text16">
                        Monitor your data in real-time to stay updated on key
                        metrics and trends instantly.
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

Features162.defaultProps = {
  content1: undefined,
  feature3ImageAlt: 'Image illustrating real-time data monitoring',
  slogan1: undefined,
  feature1Description: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1587401048047-6014f28435f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExNjQ0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1581090465237-2215893ba918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM3NTg0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Customizable Dashboards Image',
  feature2Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM3NTg0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  rootClassName: '',
  feature1Title: undefined,
  feature2ImageAlt: 'Image showing customizable dashboards',
}

Features162.propTypes = {
  content1: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  slogan1: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
}

export default Features162

