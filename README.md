

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