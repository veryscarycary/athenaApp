import React from 'react';
import { Link } from 'react-router';

const LandingPage = () => (
  <div className="landing-page">
    <h1>Landing Page</h1>
    <div className="nav">
      <Link to='/articles'>Articles</Link>
      <Link to='/tickets'>Tickets</Link>
    </div>
  </div>
)

export default LandingPage;
