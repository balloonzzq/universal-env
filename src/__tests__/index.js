import {createElement, Component} from 'rax';
import renderer from 'rax-test-renderer';
import { isWeb, isNode, isWeex, isReactNative } from '../';

describe('env', () => {
  it('web environment value is boolean', () => {
    expect(typeof isWeb).toEqual('boolean');
  });

  it('node environment value is boolean', () => {
    expect(typeof isNode).toEqual('boolean');
  });

  it('weex environment value is boolean', () => {
    expect(typeof isWeex).toEqual('boolean');
  });

  it('react native environment value is boolean', () => {
    expect(typeof isReactNative).toEqual('boolean');
  });
});
