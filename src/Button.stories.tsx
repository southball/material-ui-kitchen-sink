import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@material-ui/core';

export default {
  title: 'Material-UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Story: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Story.args = {
  variant: 'contained',
  children: 'Button',
  disabled: false,
  color: 'default',
};

Story.argTypes = {
  variant: {
    options: ['contained', 'outlined', 'default'],
    control: { type: 'inline-radio' },
  },
  color: {
    options: ['primary', 'secondary', 'default'],
    control: { type: 'inline-radio' },
  },
  disabled: { options: [false, true], control: { type: 'boolean' } },
};

export { Story as Button };
