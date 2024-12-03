import React from 'react';
import MovieTile from '../components/movieTile/movieTile';
import '../components/movieTile/movieTile.css';

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
  argTypes: {
    onClick: { action: 'movie clicked' },
    onEdit: { action: 'edit clicked' },
    onDelete: { action: 'delete clicked' },
  },
};

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    imageUrl: 'https://via.placeholder.com/150',
    name: 'Inception',
    releaseYear: '2010',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
  },
};

export const AnotherMovie = Template.bind({});
AnotherMovie.args = {
  movie: {
    imageUrl: 'https://via.placeholder.com/150',
    name: 'The Matrix',
    releaseYear: '1999',
    genres: ['Action', 'Sci-Fi'],
  },
};
