import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Cookies from 'js-cookie';
import RouteHandler from '../RouteHandler';
import { AuthorizedComponent } from 'react-router-role-authorization';
import sessionUtils from '../../utils/sessionUtils';
import articleUtils from '../../utils/articleUtils';
import Bar from './Bar';
import Pie from './Pie';
import Area from './Area';

class DashboardContainer extends AuthorizedComponent {
  constructor (props) {
    super(props)

    this.userRoles = JSON.parse(Cookies.get('roles')); //deserialize json array
    this.notAuthorizedPath = '/not-found';

    this.state = {
      articles: []
    };
  }

  componentWillMount () {
    if (!JSON.parse(Cookies.get('roles')).includes('admin')) {browserHistory.push('/not-found');}

    sessionUtils.checkSession().then(() => {
      articleUtils.getArticles()
      .then(articles => this.setState({articles}));
    });
  }

  render () {
    return (
      <div className='dashboard-container bg-warning'>
        <div className="textContainer">
        <h1 className='centerText title'>Admin Dashboard</h1>
        <h4 className='centerText content'>Your one-stop source for intelligent product analytics.</h4>
        </div>
        <div className='row'>
          <div className='graph'>
            <Bar articles={this.state.articles} />
          </div>
          <div className='graph'>
            <Pie />
          </div>
        </div>
        <div className='row'>
          <div className='graph horizontal'>
            <Area />
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardContainer;
