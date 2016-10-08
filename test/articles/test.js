import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

it('should dispatch action', () => {
  const initialState = {}
  const addTodo = { type: 'ADD_TODO' }

  const store = mockStore(initialState)
  store.dispatch(addTodo)

  const actions = store.getActions()

  expect(actions).toEqual([addTodo])
});
