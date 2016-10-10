import utils from '../../client/utils/articleUtils.js';
import articles from '../../client/mock/articleStubs.js';
import * as actions from '../../client/actions';


import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';

const mockStore = configureMockStore([promiseMiddleware()]);

describe('utils', () => {
  describe('getArticles', () => {
    nock('http://localhost:3000')
      .get('/api/kb')
      .reply(200, {body: articles});

    it('calls getArticles when action is dispatched and returns an array of articles', () => {
      let store = mockStore({
        articlesList: [],
      });
      spyOn(actions, 'getArticles').and.callThrough();
      store.dispatch(actions.getArticles())
        .then((resp) => {
          expect(actions.getArticles).toHaveBeenCalled();
          expect(resp).toEqual(articles);
        });
    });
  });

  describe('getArticle', () => {
    nock('http://localhost:3000')
      .get('/api/kb?01')
      .reply(200, {body: articles[0]});
    it('calls getArticle when action is dispatched and returns an array of articles', () => {
      let store = mockStore({
        articleDisplay:{},
      });
      spyOn(actions, 'getArticle').and.callThrough();
      store.dispatch(actions.getArticle())
        .then(resp => {
          expect(actions.getArticles).toHaveBeenCalled();
          expect(resp.toEqual(articles[0]));
          expect(store.getActions()).toEqual({type: 'GET_ARTICLE_FULFILLED', payload: {promise: articles[0]}})
        })
        .catch(err => console.log(err));
    });
  });

  describe('searchArticles', () => {
    nock('http://localhost:3000')
      .get('/api/kb/search=hi')
      .reply(200, {body: articles.slice(-3)});
    it('calls searchArticles when action is dispatched and returns an array of articles', () => {
      let store = mockStore({
        searchResults:[],
      })
      spyOn(actions, 'searchArticles').and.callThrough();
      store.dispatch(actions.searchArticles('hi'))
        .then(resp => {
          expect(actions.searchArticles).toHaveBeenCalled();
          expect(resp.toEqual(articles.slice(-3)));
          expect(store.getActions()).toEqual({type:'SEARCH_ARTICLES_FULFULLED', payload:articles.slice(-3)});
        });
    });
  });

  describe('postArticle', () => {
    nock('http://localhost:3000')
      .post('/api/kb/')
      .reply(200, {body: articles[1]});
    it('calls postArticles when action is dispatched and returns an article', () => {
      let store = mockStore({
        article:[],
      })
      spyOn(actions, 'createArticle').and.callThrough();
      store.dispatch(actions.createArticle({id:1}))
        .then(resp => {
          expect(actions.createArticle).toHaveBeenCalled();
          expect(resp.toEqual(articles[1]));
          expect(store.getActions()).toEqual({type:'CREATE_ARTICLE_FULFULLED', articles:[1]});
        });
    });

  });

  describe('editArticle', () => {
    nock('http://localhost:3000')
      .put('/api/kb/')
      .reply(200, {body: articles[1]});
    it('calls editArticles when action is dispatched and returns an article', () => {
      let store = mockStore({
        article:[],
      })
      spyOn(actions, 'editArticle').and.callThrough();
      store.dispatch(actions.editArticle({id:1}))
        .then(resp => {
          expect(actions.editArticle).toHaveBeenCalled();
          expect(resp.toEqual(articles[1]));
          expect(store.getActions()).toEqual({type:'EDIT_ARTICLE_FULFULLED', articles:[1]});
        });
    });
  });
})



