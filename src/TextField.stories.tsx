import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from '@material-ui/core';

export default {
  title: 'Material-UI/Text Field',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Story: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

Story.args = {
  variant: 'filled',
  disabled: false,
  value: '',
  label: 'Label',
  placeholder: 'Placeholder',
};

Story.argTypes = {
  variant: {
    options: ['filled', 'outlined', 'standard'],
    control: { type: 'inline-radio' },
  },
  color: {
    options: ['primary', 'secondary', 'default'],
    control: { type: 'inline-radio' },
  },
  disabled: { options: [false, true], control: { type: 'boolean' } },
};

export { Story as TextField };
