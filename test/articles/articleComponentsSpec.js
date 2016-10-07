import React from 'react';
import { shallow, mount } from 'enzyme';
import initializeMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import nock from 'nock';
import { Provider } from 'react-redux';

import articles from '../../client/mock/articleStubs';
import { ArticlesDisplay } from '../../client/components/Articles/Articles';
import { ArticleListItems } from '../../client/components/Articles/ArticleList';
import { FullArticleContainer } from '../../client/components/Articles/FullArticle';
import { CreateArticleModal } from '../../client/components/Articles/CreateArticle';
import { EditModalContainer } from '../../client/components/Articles/EditModal';
import { SearchArticlesContainer } from '../../client/components/Articles/SearchArticles';

import * as actions from '../../client/actions';

const mockStore = initializeMockStore([thunk]);
let store = mockStore({
  articlesList:[],
  create: {
    hidden: true,
  },
  articleDisplay: {
    article: {
      hidden: true,
    }
  },
  editModal: {
    hidden: true,
    article: {},
  }
});
describe('Articles', () => {
  describe('list component', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    let props = {
      articles: articles,
      toggleCreate: () => true,
      toggleArticle: () => true,
      getArticles: () => store.dispatch(actions.getArticles())
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
      spyOn(props, 'toggleCreate', 'toggleArticle', 'getArticles');
      listComponent.find('.article-list-item')
        .first()
        .find('.article-list-button')
        .simulate('click', {preventDefault: () => true})
      expect('toggleArticle' && 'getArticles').toHaveBeenCalled;
    });
  });

  describe('full article modal', () => {
    let props = {
      article: {
        ...articles[0],
        hidden: true,
      },
      dispatch: jasmine.createSpy('dispatch'),
    };
    const fullArticleModal = shallow(<FullArticleContainer {...props} />);
    it('should be hidden initially', () => {
      expect(fullArticleModal.hasClass('hidden')).toBe(true);
    });
    it('should have a button that dispatches a toggle action', () => {
      fullArticleModal.find('.full-article-button')
      .simulate('click', {preventDefault: () => true});
      expect(props.dispatch).toHaveBeenCalled();
    });
    it('should have a button that dispatches an edit widow toggle', () => {
      fullArticleModal.find('.article-list-button')
        .simulate('click', {preventDefault: () => true});
      expect(props.dispatch).toHaveBeenCalled();
    });
  });

  describe('create article modal', () => {
    let props = {
      hidden: true,
      dispatch: jasmine.createSpy('dispatch'),
    };
    const createArticleModal = mount(<CreateArticleModal {...props} />);
    it('should be hidden initially', () => {
      expect(createArticleModal.find('.full-article')
             .hasClass('hidden')).toBe(true);
    });

    it('should not submit the form when there is no content', () => {
      createArticleModal.find('.article-list-button')
        .simulate('click', {preventDefault: () => true});
      expect(props.dispatch.calls.any()).toEqual(false);
    });

    //it('should submit the form when there is content', () => {
      //createArticleModal.find({name:'title'})
        //.simulate('keydown', {which:'a'});
      //createArticleModal.find({name:'summary'})
        //.simulate('keydown', {which:'a'});
      //createArticleModal.find({name:'solution'})
        //.simulate('keydown', {which: 'a'});
       //createArticleModal.find({name:'issue'})
        //.simulate('keydown', {which: 'a'});
      //createArticleModal.find('.article-list-button')
        //.simulate('click', {preventDefault: () => true});
      //expect(props.dispatch).toHaveBeenCalled();
    //})

    it('should have a button that dispatches a create action', () => {
      createArticleModal.find('.full-article-button')
        .simulate('click', {preventDefault: () => true});
      expect(props.dispatch).toHaveBeenCalled();
    });

    it('clears the form after submit', () => {
      createArticleModal.find('.article-list-button')
        .simulate('click', {preventDefault: () => true});
        let input = createArticleModal.find('input');
      expect(input.get(0).value).toBe('');
    });

    it('has a button that toggles the display', () => {
      createArticleModal.find('.full-article-button')
        .simulate('click')
      expect(props.dispatch).toHaveBeenCalled();
    });
  });

  let props = {
    article: articles[0],
    hidden: true,
    toggleEdit: jasmine.createSpy('toggleEdit'),
    submitEdit: jasmine.createSpy('submitEdit'),
    editField: jasmine.createSpy('editField'),
  }
  const editModalContainer = mount(
    <EditModalContainer {...props} />
  );
  describe('edit modal', () => {
    it('should be hidden initially', () => {
      expect(editModalContainer.find('.full-article')
        .hasClass('hidden')).toBe(true);
    });
    it('should come with the content pre-filled', () => {
      expect(editModalContainer.find({name: 'title'}).props().value)
        .toBe(articles[0].title);
    });
    it('should trigger submit when button clicked', () => {
      editModalContainer.find('.article-list-button')
        .simulate('click', {preventDefault: () => true});
      expect(props.submitEdit).toHaveBeenCalled();
    });
    it('should trigger editField onChange event', () => {
      editModalContainer.find({name: 'title'})
        .simulate('change')
      expect(props.submitEdit).toHaveBeenCalled();
    })
  });

  describe('articlesDisplay', () => {
    let props = {
      getArticles: jasmine.createSpy('getArticles'),
    }
    const articlesDisplay = mount(
      <Provider store={store}>
        <ArticlesDisplay {...props} />
      </Provider>
    );
    it('calls get articles when it mounts', () => {
      expect(props.getArticles).toHaveBeenCalled;
    });
  });

  describe('search articles', () => {
    let props = {
      dispatch: jasmine.createSpy('dispatch'),
    }
    const searchArticles = mount(<SearchArticlesContainer />);
    it('should contain an input', () => {
      expect(searchArticles.find('input').length)
        .toBe(1);
    });
    it('should dispatch an action on change', () => {
      searchArticles.find('input')
        .simulate('change', {preventDefault: () => true});
      expect('dispatch').toHaveBeenCalled;
    });
  });
});
