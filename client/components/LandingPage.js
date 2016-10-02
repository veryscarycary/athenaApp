import React from 'react';
import { Link } from 'react-router';


class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    return (
      <div className="landing-page">

        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                      <img id='beefaloLogo' src="./images/beefalo.png" alt="" />
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                          <Link to='/articles'>Articles</Link>
                        </li>
                        <li>
                          <Link to='/tickets'>Tickets</Link>
                        </li>
                        <li>
                          <Link className='logoutNav'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default LandingPage;
