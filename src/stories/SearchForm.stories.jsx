import React from 'react';
import SearchForm from '../components/searchForm/SearchForm';
import '../components/searchForm/search.css';

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
  argTypes: {
    initialQuery: { control: 'text', defaultValue: '' }, 
  },
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialQuery: '',
};

export const WithInitialQuery = Template.bind({});
WithInitialQuery.args = {
  initialQuery: 'Action Movies',
};
