import React from 'react';

import {IconButton} from './IconButton';

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
    iconImage: {control: 'text'},
  },
};

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  disabled: false
};
