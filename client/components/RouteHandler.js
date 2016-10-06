import React from 'react';


// This component can be safely ignored for now
// If we want to have nested authorized components, this could be helpful
// To understand more, checkout https://www.npmjs.com/package/react-router-role-authorization
export default class RouterHandler extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  render() {
    const { children } = this.props;

    // No children means nothing to render.
    if (!children) {
      return null;
    }

    // That makes nested routes working.
    const propsWithoutChildren = { ...this.props };
    delete propsWithoutChildren.children;

    return React.cloneElement(children, propsWithoutChildren);
  }
}
