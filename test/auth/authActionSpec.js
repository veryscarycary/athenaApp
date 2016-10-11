import auth from '../../client/reducers/sessionReducer';
import * as types from '../../client/actions';
import articles from '../../client/mock/articleStubs';
import utils from '../../client/utils/sessionUtils.js';

import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';

const mockStore = configureMockStore([promiseMiddleware()]);

describe('auth reducer', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('stores auth information on login', () => {
    nock('http://localhost:3000')
      .get('/api/user?aa/aa')
      .reply(200, {body: {role:['admin']}});

    it('should set the auth level at login', () => {
      expect(auth({level:null}, {type:'LOGIN', payload:['admin']}))
        .toEqual({level:['admin']});
    });

    it('calls auth getAuthLevel when user logs in,' () => {
      spyOn(actions, 'getAuthLevel').and.callThrough();
      store.dispatch(actions.getAuthLevel())
        .then(resp => {
          expect(actions.getAuthLevel).toHaveBeenCalled();
        });
    });
  });
});
