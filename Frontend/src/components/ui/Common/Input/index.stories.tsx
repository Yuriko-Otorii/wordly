import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    maxWidth: '240px',
    placeholder: 'type something...',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    size: '2',
  },
};

export const Small: Story = {
  args: {
    size: '1',
  },
};

export const Large: Story = {
  args: {
    size: '3',
  },
};
