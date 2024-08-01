import { Button, Flex, Text } from '@radix-ui/themes';

export const Header = () => {
  return (
    <Flex direction='column' gap='2'>
      <Text>Hello from Radix Themes :)</Text>
      <Button size='1' variant='soft'>
        Let's go
      </Button>
    </Flex>
  );
};
