import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import PrivacyPolicy from './views/privacy-policy'
import Home from './views/home'
import OurStory from './views/our-story'
import NotFound from './views/not-found'
import Terms from './views/terms'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Home} exact path="/home" />
        <Route component={OurStory} exact path="/our-story" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={Terms} exact path="/terms" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

