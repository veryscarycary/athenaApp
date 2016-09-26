import React from 'react';
import { Link } from 'react-router';


const LandingPage = ({children}) => (
  <div className="landing-page">
    <h1>Landing Page</h1>
    <div className="nav">
      <Link to='/articles'>Articles</Link>
      <Link to='/tickets'>Tickets</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
    {children}
  </div>
)

export default LandingPage;
