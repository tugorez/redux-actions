import { createActions, createReducer } from '../index';

describe('createActionsActions', () => {
  it('should createActions actions', () => {
    const prefix = '@prefix';
    const types = ['RANDOM_ACTION1', 'RANDOM_ACTION2'];
    const actions = createActions(prefix, types);
    expect(actions.randomAction1()).toMatchSnapshot();
    expect(actions.randomAction2()).toMatchSnapshot();
  });

  it('should create a valid reducer', () => {
    const prefix = '@calculator';
    const actions = createActions(prefix, ['ADD', 'SUB']);
    const initial = 0;
    const reducer = createReducer(initial, {
      [actions.add]: (state, { payload = 1 }) => state + payload,
      [actions.sub]: (state, { payload = 1 }) => state - payload,
    });
    expect(reducer(undefined, actions.add())).toMatchSnapshot();
    expect(reducer(undefined, actions.sub())).toMatchSnapshot();
  });
});
