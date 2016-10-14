import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actions/index';

class HomeContainer extends React.Component {
  constructor (props) {
    super(props);

  }

  componentWillMount () {
    this.addClass(document.body, 'homepageBackground');
  };

  componentWillUnmount () {
    this.removeClass(document.body, 'homepageBackground');
  };

  hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className)
    } else {
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
  };

  addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else if (!hasClass(el, className)) { el.className += " " + className; }
  };

  removeClass (el, className) {
    if (el.classList) {
      el.classList.remove(className)
    } else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className=el.className.replace(reg, ' ');
    }
  };

  render () {
    return (
      <div className='homepageBackground'>
        <div className='centerFlexHomePage'>
          <h1 className='centerItem'>Athena</h1>
          <h2 className='centerItem'>Smart Support Platform</h2>
          {this.props.currentUser.roles.indexOf('guest') === -1 ?
          <h4 className='centerItem'>Hi, {this.props.currentUser.firstName}! Ready to solve some issues?</h4>
            : null}
        </div>
      </div>
    );
  }
};

const mapStateToProps = function(store) {
  console.log(store, 'this is the store at the home page!');
  return {
    currentUser: store.userReducer.currentUser
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
