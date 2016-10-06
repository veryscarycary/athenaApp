import React from 'react';
import { shallow } from 'enzyme';
import { ArticleListItems } from '../client/components/Articles/ArticleList';

describe('ArticleList', () => {
  it('should render', () => {
    expect(shallow(<ArticleListItems articles={[]} />).find(".article-list-container").length).toBe(1);
  });
});
