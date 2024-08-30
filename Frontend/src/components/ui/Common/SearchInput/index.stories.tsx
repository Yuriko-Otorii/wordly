import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '.';

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
  decorators: [
    (Story) => (
      <div className='w-60'>
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'Search...',
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

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
