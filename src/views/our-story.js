import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Features20 from '../components/features20'
import Footer15 from '../components/footer15'
import './our-story.css'

const OurStory = (props) => {
  return (
    <div className="our-story-container">
      <Helmet>
        <title>Our-Story - SCOUT</title>
        <meta
          property="og:title"
          content="Our-Story - SCOUT"
        />
      </Helmet>
      <Navbar4
        link1={
          <Fragment>
            <Link to="/home" className="nav-link">
              <span className="our-story-text10">Home</span>
            </Link>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="our-story-text11">Our Story</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="our-story-text12">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="our-story-text13">FAQ</span>
          </Fragment>
        }
        rootClassName="navbar4root-class-name"
      ></Navbar4>
      <Features20
        feature1Title={
          <Fragment>
            <span className="our-story-text15">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="our-story-text17">Our Story.</span>
            </span>
          </Fragment>
        }
        rootClassName="features20root-class-name2"
        feature1Action1={
          <Fragment>
            <a href="https://apps.apple.com/us/app/scout-shopping-assistant/id6479646798" className="nav-link">
              <span className="our-story-text18">DOWNLOAD APP</span>
            </a>
          </Fragment>
        }
        feature1Action2={
          <Fragment>
            <a href="https://www.instagram.com/reel/DCSjJWZS7PL/?igsh=bTFtc2lrazNmNXpx" className="nav-link">
              <span className="our-story-text19">WATCH TUTORIAL</span>
            </a>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="our-story-text20">
              <span>
                Who doesn't want to provide a person they love with everything they've ever wanted?
              </span>
              <br></br>
              <br></br>
              <span>
                When Hannah and I first got engaged, I found out, unbeknownst to
                me, much of our wedding had already been planned. So much for
                catching her by surprise. She even knew exactly what shoes she
                was planning to wear!
              </span>
              <br></br>
              <br></br>
              <span>
                Anyone who knows Hannah knows she has impeccable taste. The only
                problem with her goût raffiné is the price tag that comes along
                with it. Like everything wedding related these days, those Jimmy
                Choo shoes she wanted were a pretty penny.
              </span>
              <br></br>
              <br></br>
              <span>
                Luckily for me, Hannah loves a sale. And she had 18 months to
                find one. Her only challenge now was figuring out where and
                when.
              </span>
              <br></br>
              <br></br>
              <span>
                Hannah would check the sites that offered her beloved shoes
                whenever she remembered, hoping to see them on sale but
                consistently leaving disappointed. She searched and searched,
                adding more and more sites to check for sales. She monitored her
                email for promos. She even followed Instagram accounts solely
                dedicated to posting product sales.
              </span>
              <br></br>
              <br></br>
              <span>
                Eventually, after months of effort, she got her sale. Hannah was
                very excited to have the shoes of her dreams for her wedding
                day, and she later explained to me that we actually made $500
                with this purchase (girl math she says?). However, she still
                wished there was an easier way to know about sales for the
                products she wanted.
              </span>
              <br></br>
              <br></br>
              <span>
                So I did what any loving, concerned, caring, conscientious (I
                could keep going) husband would do: I quit my job and dedicated
                my life to making sure my wife never misses a sale.
              </span>
              <br></br>
              <br></br>
              <span>
                Welcome to the world, SCOUT: a platform that allows you to add
                products from anywhere on the internet, organize them into
                collections, and track their prices. No more having emails full
                of junk because you're afraid to miss a sale, no more having
                hundreds of open tabs, no more abandoned carts. All your
                shopping, organized in one place.
              </span>
              <br></br>
              <br></br>
              <span>
                And I know what you're thinking: building an app that encourages
                my significant other to shop more is quite a dangerous move.
                Well, call me a thrill seeker. I did it so you don't have to.
              </span>
              <br></br>
              <br></br>
              - Michael Roney, Founder & CEO
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <span>
                P.S. I've been seeing a lot of discourse recently about people
                saying sometimes they just want to complain to their husbands,
                they don't necessarily want to be offered solutions. Maybe I
                should've double checked with Hannah…
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features20>
      <Footer15
        action1={
          <Fragment>
            <span className="our-story-text50">SIGN UP</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="our-story-text51">
              Shop smarter, not harder. Subscribe below for updates from your
              new favorite shopping assistant, SCOUT. 
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="our-story-text52">
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
            <span className="our-story-text54">Cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <Link to="/privacy-policy" className="nav-link">
              <span className="home-text47">Privacy Policy</span>
            </Link>
          </Fragment>
        }
        rootClassName="footer15root-class-name2"
      ></Footer15>
    </div>
  )
}

export default OurStory

