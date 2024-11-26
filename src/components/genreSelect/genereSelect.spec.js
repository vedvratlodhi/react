import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from './GenreSelect';

describe('GenreSelect Component', () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Horror'];

  test('should render all genres as buttons', () => {
    render(<GenreSelect genres={genres} />);

    genres.forEach((genre) => {
      const button = screen.getByText(genre);
      expect(button).toBeInTheDocument();
    });
  });

  test('should apply the "selected" class to the button of the selected genre', () => {
    render(<GenreSelect genres={genres} selectedGenre="Action" />);

    const selectedButton = screen.getByText('Action');
    expect(selectedButton).toHaveClass('selected');
  });

  test('should change the selected genre when a button is clicked', () => {
    render(<GenreSelect genres={genres} selectedGenre="Action" />);
    const actionButton = screen.getByText('Action');
    expect(actionButton).toHaveClass('selected');

    const horrorButton = screen.getByText('Horror');
    fireEvent.click(horrorButton);

    expect(horrorButton).toHaveClass('selected');
    expect(actionButton).not.toHaveClass('selected');
  });

  test('should not apply the "selected" class to non-selected genres', () => {
    render(<GenreSelect genres={genres} selectedGenre="Comedy" />);

    const actionButton = screen.getByText('Action');
    expect(actionButton).not.toHaveClass('selected');
  });
});
