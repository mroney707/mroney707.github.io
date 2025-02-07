import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Features17 from '../components/features17'
import Features201 from '../components/features201'
import Features171 from '../components/features171'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>SCOUT</title>
        <meta property="og:image" content = "https://github.com/mroney707/mroney707.github.io/blob/main/Scout%20Main%20Logo.png?raw=true" />
        <meta property="og:title" content="SCOUT" />
      </Helmet>
      <Navbar4
        link1={
          <Link to="/home" className="nav-link">
            <span className="home-text10">Home</span>
          </Link>
        }
        link2={
          <Link to="/our-story" className="nav-link">
            <span className="home-text11">Our Story</span>
          </Link>
        }
        rootClassName="navbar4root-class-name"
      ></Navbar4>
      <Features201
        feature1Title={
          <Fragment>
            <span className="home-text15">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text17">
                Your shopping companion, always on the lookout.
              </span>
            </span>
          </Fragment>
        }
        rootClassName="features201root-class-name"
        feature1ImageSrc="Scout Home Screen.png"
        feature1Action1={
          <Fragment>
            <a href="https://apps.apple.com/us/app/scout-shopping-assistant/id6479646798" className="nav-link">
              <span className="home-text18">DOWNLOAD APP</span>
            </a>
          </Fragment>
        }
        feature1Action2={
          <Fragment>
            <a href="https://www.instagram.com/reel/DCSjJWZS7PL/?igsh=bTFtc2lrazNmNXpx" className="nav-link">
              <span className="home-text19">WATCH TUTORIAL</span>
            </a>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text20">
              Add products from anywhere on the internet, organize them into
              collections, and track their prices. Smart and efficient shopping,
              organized in one place.
            </span>
          </Fragment>
        }
      ></Features201>
      <Features17
        feature1Title={
          <Fragment>
            <span className="home-text21">Shop the way you want.</span>
          </Fragment>
        }
        rootClassName="features17root-class-name"
        feature1Description={
          <Fragment>
            <span className="home-text22">
              <span>
                Whether it's surfing safari, shopping on a retailer's app, or
                browsing an ad on Instagram, you don't have to change your
                shopping habits with SCOUT.
              </span>
              <br className="home-text24"></br>
              <br></br>
              <span className="home-text26">
                "I never realized how often things go on sale until I started using SCOUT! It's so easy to save money without even trying with SCOUT tracking the prices of the things I want for me! Never paying full price again."
              </span>
              <br className="home-text27"></br>
              {/* <span className="home-text28">
                                               -Eventually Forbes
              </span> */}
            </span>
          </Fragment>
        }
      ></Features17>
      <Features201
        feature1Title={
          <Fragment>
            <span className="home-text29">
              What you want for the price you want.
            </span>
          </Fragment>
        }
        rootClassName="features201root-class-name"
        feature1Action1={
          <Fragment>
            <a href="https://apps.apple.com/us/app/scout-shopping-assistant/id6479646798" className="nav-link">
              <span className="home-text30">START SAVING</span>
            </a>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text31">
              <span className="home-text32">
                No buyer's remorse here! Feel good about your price-conscious,
                responsible shopping.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text33"></br>
              <br className="home-text34"></br>
              <span className="home-text35">
                SCOUT conveniently notifies you when your product hits its
                target price and directs you back to the retailer's product page
                when you are ready to buy.
              </span>
            </span>
          </Fragment>
        }
      ></Features201>
      <Features171
        feature1Title={
          <Fragment>
            <span className="home-text36">Save now to save later.</span>
          </Fragment>
        }
        rootClassName="features171root-class-name"
        feature1Description={
          <Fragment>
            <span className="home-text37">
              <span>
                Shop for your upcoming vacation or special event, create gift
                lists for birthdays, browse for the different seasons, and keep
                track of your repeat buys.
              </span>
              <br></br>
              <br></br>
              <span>
                Shopping with a friend? Add them to a collaboration so you both
                reap the benefits.
              </span>
            </span>
          </Fragment>
        }
      ></Features171>
      <Footer15
        action1={
          <Fragment>
            <span className="home-text42">SIGN UP</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text43">
              Shop smarter, not harder. Subscribe below for updates from your
              new favorite shopping assistant, SCOUT. 
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="home-text44">
              © 2024 Shop SCOUT, Inc. All rights reserved.
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <Link to="/terms" className="nav-link">
              <span className="home-text45">Terms of Service</span>
            </Link>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text46">Cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <Link to="/privacy-policy" className="nav-link">
              <span className="home-text47">Privacy Policy</span>
            </Link>
          </Fragment>
        }
        rootClassName="footer15root-class-name"
      ></Footer15>
    </div>
  )
}

export default Home

