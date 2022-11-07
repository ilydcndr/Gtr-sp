/*import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../App';
import { Products } from '../Products';
import { Cart } from '../Cart';
import { Filters } from '../Filters';
import userEvent from '@testing-library/user-event';

test('renders title product comp', () => {
  render(<Products />);

  const linkElement = screen.getByText(/Products/i);
  expect(linkElement).toBeInTheDocument();
});

test('Cart quantity initially 0',() => {
  render(<Cart />);
  const initialQuantity = screen.getByTestId('initialQuantity')
  expect(initialQuantity).toHaveTextContent(1);

})

test('Decrease quantitiy on cart',() => {
  render(<Cart />);
  const initialQuantity = screen.getByTestId('initialQuantity')
  const decreaseButton = screen.getByTestId('decreaseButton')
  userEvent.click(decreaseButton);
  expect(initialQuantity).toHaveTextContent(2);
})

test('Quantity should be 1 min',() => {
  render(<Cart />);
  const initialQuantity = screen.getByTestId('initialQuantity')
  expect(initialQuantity).toBeGreaterThan(1);
})

test('Initially sorting checkbox is not checked',() => {
  render(<Filters/>);
  const checkEl = screen.getAllByRole("checkbox")
  expect(checkEl).not.toBeChacked()
})

test('All filters title',() => {
  render(<App />);

  const sortTitle = screen.getByText(/sorting/i);
  expect(sortTitle).toBeInTheDocument();

  const brandTitle = screen.getByText(/brands/i);
  expect(brandTitle).toBeInTheDocument();

  const tagsTitle = screen.getByText(/tags/i);
  expect(tagsTitle).toBeInTheDocument();
})

test('Filters titles have css class',() => {
  render(<App />);

  const sortTitle = screen.getByText(/sorting/i);
  expect(sortTitle).toHaveClass('filter__title')

  const brandTitle = screen.getByText(/brands/i);
  expect(brandTitle).toHaveClass('filter__title')

  const tagsTitle = screen.getByText(/tags/i);
  expect(tagsTitle).toHaveClass('filter__title')
})*/