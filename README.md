# redux-actions
[ ![Codeship Status for spaceship-labs/seeus](https://app.codeship.com/projects/abbe37c0-de0c-0134-a6f5-32fb9f657a0b/status?branch=master)](https://app.codeship.com/projects/204643)
[![codecov](https://codecov.io/gh/tugorez/redux-actions/branch/master/graph/badge.svg)](https://codecov.io/gh/tugorez/redux-actions)

Based on the awesome project [redux-actions](https://github.com/acdlite/redux-actions)

### Why another redux-actions package ? 
Actually I just wrap a single function: createActions which now only receives an arbitrary number of string literals and supports their type to be prefixed

```javascript
const prefix = 'some_random_prefix';
const type1 = 'SOME_RANDOM_TYPE_1';
const type2 = 'SOME_RANDOM_TYPE_2';
const type3 = 'SOME_RANDOM_TYPE_3';
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
```
