import React from 'react';
import { Link } from 'react-router';


const LandingPage = ({children}) => (
  <div className="landing-page">
    <Link to='/articles'>Articles</Link>
    <Link to='/tickets'>Tickets</Link>
    {children}
  </div>
)

export default LandingPage;
