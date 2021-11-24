import React from 'react';

import {Canvas} from './Canvas';

export default {
  title: 'Example/Canvas',
  component: Canvas,
};

const Template = (args) => <Canvas {...args} />;

export const canvas = Template.bind({});