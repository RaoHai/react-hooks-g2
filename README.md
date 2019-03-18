
### TEST-HOOKS

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/RaoHai/test-hooks.svg)](https://travis-ci.org/RaoHai/test-hooks)
[![Coverage Status](https://coveralls.io/repos/github/RaoHai/test-hooks/badge.svg?branch=master)](https://coveralls.io/github/RaoHai/test-hooks?branch=master)
[![dependencies Status](https://david-dm.org/RaoHai/test-hooks/status.svg)](https://david-dm.org/RaoHai/test-hooks)

### Usage
```js
  import testHooks from 'test-hooks'
  const { act, hooks } = testHooks(() => useState(true));
  expect(hooks()[0]).toEqual(true);
  act(hook => {
    hook[1](false);
  });
  expect(hooks()[0]).toEqual(false);
```