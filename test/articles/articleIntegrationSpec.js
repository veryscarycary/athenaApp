import { articlesList, article, create, editModal, articleDisplay, searchResults } from '../../client/reducers/articlesReducer';

import * as types from '../../client/actions';

import articles from '../../client/mock/articleStubs';


describe('articles reducer', () => {

  describe('articles list', () => {

    it('should return the initial state', () => {
      expect(articlesList(undefined, {})).toEqual([]);
    });

    it('should add handle get articles', () => {
      expect(articlesList([], { type: 'GET_ARTICLES_FULFILLED', payload:'b' }))
        .toEqual([ 'b' ])
    });

    it('should handle submit edit fulfilled', () => {
      expect(articlesList([ { id: 1, song:'lala' }],
                            { type: 'SUBMIT_EDIT_FULFILLED',
                              payload:{id:1, song:'yoyoyo' }}))
        .toEqual([{ id: 1, song:'yoyoyo'}])
    });

    it('should handle a created article', () => {
      expect(articlesList([{id:1}], { type: 'CREATE_ARTICLE_FULFILLED',
                                payload: [{id:2}]}).length)
        .toEqual(2);
    });

  });
  describe('article', () => {

   it('should create an article', () => {
      expect(article({}, { type: 'CREATE_ARTICLE_FULFILLED',
                     payload: {id:1, issuePreview:1, title:1, issue:1, solution:1} }))
        .toEqual({id:1, issuePreview:1,title:1,issue:1,solution:1,status:'fulfilled'});
    });
  });

  describe('articleDisplay', () => {

    it('should update article when edited', () => {
      expect(articleDisplay({hidden:true}, { type:'SUBMIT_EDIT_FULFILLED',
                                             payload: { issue:1,solution:1,title:1,issuePreview:1 }} ))
        .toEqual({hidden:true,issue:1,solution:1,title:1,issuePreview:1});
    });

    it('should update state when get article is fulfilled', () => {
      expect(articleDisplay({hidden:true}, {type: 'GET_ARTICLE_FULFILLED',
                                            payload: [{ title:1,solution:1,issue:1,_id:1,issuePreview:1,issue:1,id:1 }]}))
        .toEqual({ title:1,solution:1,issue:1,_id:1,issuePreview:1,issue:1,id:1,hidden:false,status:'fulfilled' });
    });

    it('should toggle display', () => {
      expect(articleDisplay({hidden:true}, {type: 'TOGGLE_DISPLAY'}))
        .toEqual({hidden:false});
    });
  });
  describe('editModal', () => {
    it('should toggle the modal', () => {
      expect(editModal({hidden:true, article:{}}, {type:'TOGGLE_EDIT_MODAL', payload:'article'}))
        .toEqual({hidden:false, article:'article'});
    });
    it('should handle edit field', () => {
      
    })
  })
});
