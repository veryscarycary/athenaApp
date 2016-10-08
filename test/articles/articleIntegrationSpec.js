import { articlesList,
         article,
         create,
         editModal,
         articleDisplay,
         searchResults } from '../../client/reducers/articlesReducer';
import * as types from '../../client/actions';

describe('articles reducer', () => {
  describe('articles list', () => {
    it('should return the initial state', () => {
      expect(articlesList(undefined, {})).toEqual([]);
    });
    it('should add handle get articles', () => {
      expect(articlesList([], {type: 'GET_ARTICLES_FULFILLED', payload:'b'})).toEqual(
        [
          'b'
        ]
      )
    });
    it('should handle submit edit fulfilled', () => {
      expect(articlesList([{id: 1, song:'lala'}],
                          {
                            type: 'SUBMIT_EDIT_FULFILLED',
                            payload:{id:1, song:'yoyoyo'}
                          }
                         )
            ).toEqual(
        [
          {id: 1, song:'yoyoyo'}
        ]
      )
    });
    it('should ')
  })
})
