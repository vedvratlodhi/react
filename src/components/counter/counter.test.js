import { screen ,fireEvent} from "@testing-library/react"
import {render} from '@testing-library/react';
import { act } from 'react';
import Counter from "./Counter"

describe('Counter Component test', ()=>{
    test('renders the Counter component with initial count', () => {
        render(<Counter initialValue={5} />);
        expect(screen.getByText('Count: 5')).toBeInTheDocument();
      });
      test('renders with default count of 0 if no initial value is provided', () => {
        render(<Counter />);
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
      });


  test('decrements count when "-" button is clicked', () => {
    render(<Counter initialValue={5} />);
    
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    
    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });
 


  test('increments count when "+" button is clicked', () => {
    render(<Counter initialValue={5} />);
    
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    
    expect(screen.getByText('Count: 6')).toBeInTheDocument();
  });
  test('increments and decrements correctly with multiple clicks', () => {
    render(<Counter initialValue={5} />);
    
    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');

    // Increment count three times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 8')).toBeInTheDocument();

    // Decrement count twice
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(screen.getByText('Count: 6')).toBeInTheDocument();
  });

});

