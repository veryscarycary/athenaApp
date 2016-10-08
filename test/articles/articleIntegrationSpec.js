//import React from 'react';
//import { mount } from 'enzyme';
//import mockStore from 'redux-mock-store';
//import thunk from 'redux-thunk';
//import nock from 'nock';

//import articles from '../../client/mock/articleStubs';

//import * as actions from '../../client/actions';

//const mockStore = mockStore([thunk]);

//describe('articles actions', () => {
  //afterEach(() => {
    //nock.cleanAll();
  //})
  //it('gets articles from the server', () => {
    //nock('https://localhost:3000')
      //.get('/api/kb')
      //.reply(200, {body: articles});
    //const initialState = {};
    //const getArticles = {type: 'GET_ARTICLES'};

    //const store = mockStore({articlesList:[]})
    //return store.dispatch(actions.getArticles())
      //.then(() => {
        //expect(store.articleList).toEqual(articles);
      //});
  //})
 //})
