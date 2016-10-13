import React from 'react';
import { connect } from 'react-redux';
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
    alert(Cookies.get('roles'));
    sessionUtils.checkSession();
    articleUtils.getArticles()
      .then(articles => this.setState({articles}))
      .then(() => alert(JSON.stringify(this.state.articles)));
  }

  render () {
    return (
      <div className='container bg-warning'>
        <h1 className='centerText'>Admin Dashboard</h1>
        <h4 className='centerText'>Your one-stop source for intelligent product analytics.</h4>
        <br />
        <div className='row'>
          <div className='col-xs-6 col-xs-push-1'>
            <Bar articles={this.state.articles} />
          </div>
          <div className='col-xs-6'>
            <Pie />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-xs-push-1'>
            <Area />
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardContainer;
