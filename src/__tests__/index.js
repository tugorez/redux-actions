import { createActions } from '../index';

const prefix = 'some_random_prefix';
const type1 = 'SOME_RANDOM_TYPE_1';
const type2 = 'SOME_RANDOM_TYPE_2';
const type3 = 'SOME_RANDOM_TYPE_3';

describe('createActions', () => {
  it('should create the regular actions', () => {
    const {
      someRandomType1,
      someRandomType2,
      someRandomType3,
    } = createActions(
      type1,
      type2,
      type3,
    );
    expect(someRandomType1().type).toEqual(type1);
    expect(someRandomType2().type).toEqual(type2);
    expect(someRandomType3().type).toEqual(type3);
  });

  it('should create the actions with a prefix', () => {
    const {
      someRandomType1,
      someRandomType2,
      someRandomType3,
    } = createActions(
      { prefix },
      type1,
      type2,
      type3,
    );
    expect(someRandomType1().type).toEqual(`${prefix}/${type1}`);
    expect(someRandomType2().type).toEqual(`${prefix}/${type2}`);
    expect(someRandomType3().type).toEqual(`${prefix}/${type3}`);
  });
});
