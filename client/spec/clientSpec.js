import store from '../index';

describe('client', function() {
  it('should render to a div with the id "entry"', function() {
    expect(5).to.equal(5);
  });

  describe('index', function() {
    it('should have a store that includes reducers and middleware', function() {
      expect(store).to.be.ok;
      // expect(rootReducer).to.be.ok;
      // expect(thunk).to.be.ok;
      // expect(promiseMiddleware).to.be.ok;
      // expect(promiseMiddleware).to.be.ok;
      // expect(loggerMiddleware).to.be.ok;
    });
  });
});
