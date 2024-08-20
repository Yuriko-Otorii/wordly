import { Container } from '@radix-ui/themes';
import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';

const meta: Meta<typeof Footer> = {
  component: Footer,
  decorators: [
    (Story) => (
      <Container size='1'>
        <Story />
      </Container>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {},
};
