

import Header from '../components/header/Header';

import React from 'react';


export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedMovie: null,
  onBackToSearch: () => console.log('Back to search clicked'),
};

export const WithSelectedMovie = Template.bind({});
WithSelectedMovie.args = {
  selectedMovie: {
    title: 'Inception',
    year: 2010,
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
  },
  onBackToSearch: () => console.log('Back to search clicked'),
};