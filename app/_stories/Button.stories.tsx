import type {Meta, StoryObj} from '@storybook/react';

import Button from '../_components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button'
  }
}
export const SmallButton: Story = {
  args: {
    label: 'Button',
    size: 'small'
  }
}

export const MediumButton: Story = {
  args: {
    label: 'Button',
    size: 'medium'
  }
}

export const LargeButton: Story = {
  args: {
    label: 'Button',
    size: 'large'
  }
}
