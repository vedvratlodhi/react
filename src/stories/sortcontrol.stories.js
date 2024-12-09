

import React from 'react';
import SortControl from '../components/sortControl/sortControl';

export default {
  title: 'SortControl',
  component: SortControl,
};

const Template = (args) => <SortControl {...args} />;


export const Default = Template.bind({});
Default.args = {
  currentSelection: 'release_date',
  onSortChange: (value) => console.log('Selected sort option:', value),
};

export const TitleSelected = Template.bind({});
TitleSelected.args = {
  currentSelection: 'title',
  onSortChange: (value) => console.log('Selected sort option:', value),
};