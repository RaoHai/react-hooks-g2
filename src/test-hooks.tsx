import React from 'react';
import { render, act } from 'react-testing-library'

export default function testHooks<T>(wrapper: () => T) {
  let hooks: T;
  function HooksContinuationPlaceholder() {
    hooks = wrapper();
    return <div />;
  }

  act(() => {
    render(<HooksContinuationPlaceholder />);
  });

  return {
    act: (callback: (hook: T) => void) => {
      act(() => {
        callback(hooks);
      });
    },
    hooks() {
      return hooks;
    }
  }
}