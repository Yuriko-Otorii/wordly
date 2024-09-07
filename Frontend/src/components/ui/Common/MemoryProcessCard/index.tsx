'use client';

import { Box, Button, Card, Flex, Grid, Text } from '@radix-ui/themes';

type Props = {
  memoryProcess: number;
  wordCount: number;
};

export const MemoryProcessCard: React.FC<Props> = (props) => {
  return (
    <Box width='100%'>
      <Card>
        <Flex align='center' justify='between'>
          <Grid columns={{ initial: '1', md: '2' }} gap='3'>
            <Grid columns={{ initial: '1', md: '2' }}>
              <Text as='div' size='2' weight='bold'>
                Memory process: {props.memoryProcess}/4
              </Text>
              <Text as='div' size='2' color='gray'>
                {props.wordCount} words
              </Text>
            </Grid>
            {/* TODO: replace a button */}
            <Button variant='solid' className='text-white'>
              Start now
            </Button>
          </Grid>
          <Flex align='center'>
            <div className='h-full w-full text-7xl font-extrabold text-[#F2F2F2]'>
              {props.memoryProcess}
            </div>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};
