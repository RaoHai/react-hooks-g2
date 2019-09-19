
import React from 'react';
import { mount } from 'enzyme';
import { UseG2 } from '../src/react-hooks-g2';


describe('react-hooks-g2', () => {
  it('basic usage', () => {
    const fn = jest.fn();
    class Wrapper extends React.Component<{}, { data: unknown[]}> {
      state = {
        data: [{ foo: 'bar' }],
      }
      update() {
        this.setState({ data: [{ bar: 'foo' }]});
      }
      render() {
        return <UseG2
          callback={fn}
          data={this.state.data}
        />;
      }
    }

    const wrapper = mount(<Wrapper />);
    expect(wrapper);
    expect(fn).toHaveBeenCalled();


    wrapper.mount();
    (wrapper.instance() as Wrapper).update();

    wrapper.update();

    wrapper.unmount();
  });

  it('padding', () => {
    const fn = jest.fn();
    class Wrapper extends React.Component<{}, { data: unknown[]}> {
      state = {
        data: [{ foo: 'bar' }],
      }
      update() {
        this.setState({ data: [{ bar: 'foo' }]});
      }
      render() {
        return <UseG2
          callback={fn}
          data={this.state.data}
          padding={['auto', 'auto', 'auto', 0]}
        />;
      }
    }
    const wrapper = mount(<Wrapper />);
    expect(wrapper);
    expect(fn).toHaveBeenCalled();


    wrapper.mount();
    (wrapper.instance() as Wrapper).update();

    wrapper.update();

    wrapper.unmount();
  });
});