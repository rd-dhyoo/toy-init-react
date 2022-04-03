import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@mui/material';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button>Button</Button>;
