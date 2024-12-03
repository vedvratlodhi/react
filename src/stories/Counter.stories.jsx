import React from 'react';
import Counter from '../components/counter/Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    initialValue: { control: 'number', defaultValue: 0 },
  },
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: 0,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  initialValue: 10,
};
