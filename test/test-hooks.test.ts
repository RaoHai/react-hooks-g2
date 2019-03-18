import testHooks from '../src/test-hooks';
import { useState } from 'react';

describe('test-hooks', () => {
  it('basic usage', () => {
    const { act, hooks, unmount } = testHooks(() => useState(true));
    expect(hooks()[0]).toEqual(true);
    act(hook => {
      hook[1](false);
    });
    expect(hooks()[0]).toEqual(false);
    unmount();
  });
});