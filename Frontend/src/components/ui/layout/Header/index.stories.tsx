import { Container } from '@radix-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  decorators: [
    (Story) => (
      <Container size='1'>
        <Story />
      </Container>
    ),
  ],
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    userName: 'John',
    pageName: 'Home',
    userSettingLink: 'https://example.com/',
  },
};
