import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar4 from '../components/navbar4'
import Footer15 from '../components/footer15'
import './terms.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>Terms of Service - SCOUT</title>
      </Helmet>
      <Navbar4
        link1={
          <Link to="/home" className="nav-link">
            <span className="privacy-policy-text">Home</span>
          </Link>
        }
        link2={
          <Link to="/our-story" className="nav-link">
            <span className="privacy-policy-text">Our Story</span>
          </Link>
        }
        rootClassName="navbar4root-class-name2"
      />
    <div class="privacy-policy-content">
        <h1>SCOUT's Terms and Conditions of Use</h1>
        
        <h2>1. Terms</h2>
        <p>By accessing this Mobile Application, you are agreeing to be bound by these Mobile Application Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this application. The materials contained in this Application are protected by copyright and trademark law.</p>
        
        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on Shop SCOUT, Inc.'s Application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose or for any public display;</li>
            <li>Attempt to reverse engineer any software contained on Shop SCOUT, Inc.'s Application;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>This will let Shop SCOUT, Inc. terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>
        
        <h2>3. Disclaimer</h2>
        <p>All the materials on Shop SCOUT, Inc.'s Application are provided "as is". Shop SCOUT, Inc. makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Shop SCOUT, Inc. does not make any representations concerning the accuracy or reliability of the use of the materials on its Application or otherwise relating to such materials or any sites linked to this Application.</p>
        
        <h2>4. Limitations</h2>
        <p>Shop SCOUT, Inc. or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on Shop SCOUT, Inc.'s Application, even if Shop SCOUT, Inc. or an authorized representative of this Application has been notified, orally or written, of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental damages; these limitations may not apply to you.</p>
        
        <h2>5. Revisions and Errata</h2>
        <p>The materials appearing on Shop SCOUT, Inc.'s Application may include technical, typographical, or photographic errors. Shop SCOUT, Inc. does not promise that any of the materials in this Application are accurate, complete, or current. Shop SCOUT, Inc. may change the materials contained on its Application at any time without notice. Shop SCOUT, Inc. does not make any commitment to update the materials.</p>
        
        <h2>6. Links</h2>
        <p>Shop SCOUT, Inc. has not reviewed all of the sites linked to its Application and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Shop SCOUT, Inc. of the site. The use of any linked website is at the user's own risk.</p>
        
        <h2>7. Site Terms of Use Modifications</h2>
        <p>Shop SCOUT, Inc. may revise these Terms of Use for its Application at any time without prior notice. By using this Application, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
        
        <h2>8. Your Privacy</h2>
        <p>Please read our <a href="#">Privacy Policy</a>.</p>
        
        <h2>9. Governing Law</h2>
        <p>Any claim related to Shop SCOUT, Inc.'s Application shall be governed by the laws of the US without regard to its conflict of law provisions.</p>
    </div>
      <Footer15 rootClassName="footer15root-class-name" />
    </div>
  )
}

export default PrivacyPolicy 