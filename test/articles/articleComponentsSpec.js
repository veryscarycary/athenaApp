import React from 'react';
import { shallow } from 'enzyme';
import initializeMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import articles from '../../client/mock/articleStubs';
import { ArticleListItems } from '../../client/components/Articles/ArticleList';
import { FullArticleContainer } from '../../client/components/Articles/FullArticle';
//import CreateArticle from '../../client/components/Articles/CreateArticle';

import * as actions from '../../client/actions';

const mockStore = initializeMockStore([thunk]);

describe('Articles', () => {

  describe('list component', () => {

    afterEach(() => {
      nock.cleanAll();
    });

    nock('https://localhost:3000')
      .get('/api/kb')
      .reply(200, {body: articles});


    const props = {
      articles: articles,
      toggleCreate: () => true,
      toggleArticle: () => true,
      getArticle: () => store.dispatch(actions.getArticles()),
    }

    const listComponent = shallow(<ArticleListItems {...props} />);

    it('should render the articles passed to it', () => {
      expect(listComponent.find('.article-list-item').length).toBe(10);
    });

    it('should display the content from the articles', () => {
      expect(listComponent.find('.article-list-title').isEmpty()).toBe(false);
    });

    it('should be in reverse order from the props', () => {
      expect(listComponent.find('.article-list-item').first().key()).toBe('10');
      expect(listComponent.find('.article-list-item').last().key()).toBe('1');
    });

    it('should handle toggle create article when button pressed', () => {
      spyOn(props, 'toggleCreate', 'toggleArticle', 'getArticle');
      listComponent.find('.full-article-button')
        .simulate('click')
      expect('toggleCreate').toHaveBeenCalled;
    });

    it('should handle toggle full article when button pressed', () => {
      spyOn(props, 'toggleCreate', 'toggleArticle', 'getArticle');
      listComponent.find('.article-list-item')
        .first()
        .find('.article-list-button')
        .simulate('click', {preventDefault: () => true})
      expect('toggleArticle' && 'getArticle').toHaveBeenCalled;
    });

    it('should dispatch an action when getArticle is called, and return an article object', () => {
      const store = mockStore({articlesList:[]});
      listComponent.find('.article-list-item')
        .first()
        .find('.article-list-button')
        .simulate('click', {preventDefault: () => true})
        expect(store.getState().articlesList).toEqual(articles);
    });

  });

  describe('full article modal', () => {
    const fullArticleModal = shallow(<FullArticleContainer article={{hidden:true}} />);
    it('should be hidden initially', () => {
      expect(fullArticleModal.hasClass('hidden')).toBe(true);
    });
  });
});

//etc...
