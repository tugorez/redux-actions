import { createAction, handleActions } from 'redux-actions';
import camelCase from './camelcase';

const createActions = (prefix, types) =>
  types.reduce((actions, type) => {
    const prefixed = `${prefix}/${type}`;
    const action = createAction(prefixed);
    action.type = prefixed;
    return { ...actions, [camelCase(type)]: action };
  }, {});

const createReducer = (initial, reducer) => handleActions(reducer, initial);

export { createActions, createReducer };
