import type { Meta, StoryObj } from '@storybook/react';
import { MemoryProcessCard } from '.';

const meta: Meta<typeof MemoryProcessCard> = {
  component: MemoryProcessCard,
  decorators: [
    (Story) => (
      <div className='w-60'>
        <Story />
      </div>
    ),
  ],
  args: {
    memoryProcess: 1,
    wordCount: 10,
  },
};

export default meta;
type Story = StoryObj<typeof MemoryProcessCard>;

export const Primary: Story = {
  args: {},
};
