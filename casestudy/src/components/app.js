import React from 'react'
import { Link } from 'react-router'

import Navigation from './common/navigation'

class App extends React.Component {
  render() {
    let markup = (
      <div className="container">
        <!-- Static navbar -->
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                      aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                React Case Study Home!
              </Link>
            </div>
            <Navigation {this.props.children}/>
          </div>
        </nav>
      </div>
    );
    return markup;
  }
}

export default App;
