import React from 'react';
import GenreSelect from '../components/genreSelect/GenreSelect';
import '../components/genreSelect/genreSelect.css';

export default {
  title: 'Components/GenreSelect', // Define the group and story name
  component: GenreSelect,
  argTypes: {
    genres: { control: 'array', defaultValue: ['Action', 'Comedy', 'Drama', 'Horror'] },
    selectedGenre: { control: 'text', defaultValue: '' },
  },
};

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  genres: ['Action', 'Comedy', 'Drama', 'Horror'],
  selectedGenre: '',
};

export const PreselectedGenre = Template.bind({});
PreselectedGenre.args = {
  genres: ['Action', 'Comedy', 'Drama', 'Horror'],
  selectedGenre: 'Comedy',
};
