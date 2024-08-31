import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  component: Select,
  args: {
    placeholder: 'Pick a fruit',
    option: [
      {
        value: 'apple',
        label: 'Apple',
      },
      {
        value: 'orange',
        label: 'Orange',
      },
      {
        value: 'avocad',
        label: 'Avocad',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

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
