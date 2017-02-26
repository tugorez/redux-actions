import {
  createAction,
  handleAction,
  handleActions,
  combineActions,
} from 'redux-actions';
import camelCase from './camelcase';

const prepareTypes = (opts, types) =>
  (typeof opts === 'string' ? [opts, ...types] : types);

const preparePrefix = opts => sufx =>
  (typeof opts === 'object' && opts.prefix ? `${opts.prefix}/${sufx}` : sufx);

const createActions = (options, ...Alltypes) => {
  const types = prepareTypes(options, Alltypes);
  const prefix = preparePrefix(options);
  return types.reduce((actions, rawType) => {
    const type = camelCase(rawType);
    const prefixed = prefix(rawType);
    const action = createAction(prefixed);
    return { ...actions, [type]: action };
  }, {});
};

export {
  createAction,
  createActions,
  handleAction,
  handleActions,
  combineActions,
};
