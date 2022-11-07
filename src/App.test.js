/*import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import '@testing-library/extend-expect';
import userEvent from '@testing-library/user-event';

const functions = require('./functions');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Adds cart items', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', ()=> {
  expect(functions.isNull()).toBeNull();
})

test('Should be falsy', ()=> {
  expect(functions.checkValue(undefined)).not.toBeFalsy();
})

test('obje kontrol',() => {
  expect (functions.createUser()).toBe({
    firstName: 'x',
    lastName: 'b'
  })
})

test('5 den kucuk',() => {
  const load1 = 800;
  const load2 =200;
  expect(load1 + load2).toBeLessThan(1600);
})

test('match letter',() => {
  expect('team').toMatch(/tl/);
})

//array

test('bulunmalı',() => {
  usernames = ['c','b','sdfs'];
  expect(usernames).toContain('sdfs');
})*/