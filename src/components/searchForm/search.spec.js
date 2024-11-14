import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
  it('should render the input field with placeholder text', () => {
    render(<SearchForm />);
    const input = screen.getByPlaceholderText('What do you want to watch?');
    expect(input).toBeInTheDocument();
  });

  it('should render the search button', () => {
    render(<SearchForm />);
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it('should display the initial query value in the input field', () => {
    render(<SearchForm initialQuery="Initial Query" />);
    const input = screen.getByDisplayValue('Initial Query');
    expect(input).toBeInTheDocument();
  });

  it('should update the query state when typing in the input field', () => {
    render(<SearchForm />);
    const input = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: 'New Query' } });
    expect(input.value).toBe('New Query');
  });

  it('should call handleSearch on button click', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<SearchForm />);
    const input = screen.getByPlaceholderText('What do you want to watch?');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'Test Query' } });
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('Test Query');
    consoleSpy.mockRestore();
  });

  it('should call handleSearch when Enter key is pressed in the input field', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<SearchForm />);
    const input = screen.getByPlaceholderText('What do you want to watch?');

    fireEvent.change(input, { target: { value: 'latest moview' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(consoleSpy).toHaveBeenCalledWith('latest moview');
    consoleSpy.mockRestore();
  });
});
