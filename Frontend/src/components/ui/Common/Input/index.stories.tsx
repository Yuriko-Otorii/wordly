import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: 'type something...',
    label: 'Word',
  },
  decorators: [
    (Story) => (
      <div className='w-60'>
        <Story />
      </div>
    ),
  ],
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
