import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features10.css'

const Features10 = (props) => {
  return (
    <div className="features10-layout300 thq-section-padding">
      <div className="features10-max-width thq-section-max-width thq-flex-column">
        <div className="features10-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.slogan ?? (
              <Fragment>
                <span className="features10-text21">
                  Unlock Insights, Drive Growth
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2 features10-text11">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features10-text20">Key Features</span>
              </Fragment>
            )}
          </h2>
          <p className="features10-text12 thq-body-large">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features10-text14">
                  Explore the advanced analytics tools that empower you to make
                  data-driven decisions for your business.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="features10-content thq-grid-auto-300">
          <div className="features10-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="features10-feature1-title thq-heading-3">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features10-text23">Data Visualization</span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features10-text22">
                    Visualize complex data sets with interactive charts and
                    graphs.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features10-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features10-text15">
                    Predictive Analytics
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features10-text16">
                    Utilize predictive models to forecast trends and outcomes.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features10-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features10-text18">Custom Reporting</span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features10-text19">
                    Create customized reports tailored to your specific business
                    needs.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features10-actions thq-flex-row">
          <button className="features10-button1 thq-button-filled">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features10-text17">
                    Start Analyzing Data
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="features10-button2 thq-button-outline">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features10-text13">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features10.defaultProps = {
  secondaryAction: undefined,
  sectionDescription: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1581093805920-c5666c544c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExODQzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExODQzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODExODQzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Custom Reporting Icon',
  feature2Description: undefined,
  feature2ImageAlt: 'Predictive Analytics Icon',
  mainAction: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature1ImageAlt: 'Data Visualization Icon',
  sectionTitle: undefined,
  slogan: undefined,
  feature1Description: undefined,
  feature1Title: undefined,
}

Features10.propTypes = {
  secondaryAction: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  mainAction: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  slogan: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features10

