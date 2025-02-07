import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features16.css'

const Features16 = (props) => {
  return (
    <div className="features16-layout300 thq-section-padding">
      <div className="features16-max-width thq-section-max-width">
        <div className="features16-section-title">
          <span className="features16-text10 thq-body-small">
            {props.slogan1 ?? (
              <Fragment>
                <span className="features16-text16">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="features16-content1">
            <h2 className="features16-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features16-text20">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features16-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="features16-text15">
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
        <div className="features16-content2">
          <div className="features16-row thq-flex-row">
            <div className="features16-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content3">
                <h3 className="features16-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features16-text19">
                        Advanced Analytics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features16-text21">
                        Utilize advanced analytics tools to uncover key insights
                        and trends.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features16-text13">
                        Customizable Dashboards
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features16-text14">
                        Create personalized dashboards to track metrics that
                        matter most to your business.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features16-text18">
                        Real-time Data Monitoring
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features16-text17">
                        Monitor real-time data streams for immediate
                        decision-making.
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

Features16.defaultProps = {
  feature2Title: undefined,
  feature2Description: undefined,
  content1: undefined,
  feature2ImageAlt: 'Customizable Dashboards Image',
  slogan1: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExNjMwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature3Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1580835916389-569402438200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExNjMwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Advanced Analytics Image',
  feature1Title: undefined,
  feature3ImageAlt: 'Real-time Data Monitoring Image',
  heading1: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1728917330539-c092c4953f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExNjMwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
}

Features16.propTypes = {
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  content1: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  slogan1: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
}

export default Features16

