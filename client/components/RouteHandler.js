import React from 'react';

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
