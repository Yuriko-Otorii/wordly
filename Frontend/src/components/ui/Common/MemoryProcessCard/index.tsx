'use client';

import { Box, Button, Card, Flex, Grid, Text } from '@radix-ui/themes';

type Props = {
  memoryProcess: number;
  wordCount: number;
};

export const MemoryProcessCard: React.FC<Props> = (props) => {
  return (
    <Box width='100%'>
      <Card className='relative p-6'>
        <Flex align='center' justify='between'>
          <Grid gap='3'>
            <Grid>
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
        </Flex>
        <Flex align='center'>
          <div className='absolute right-2 top-1/2 z-[-1] -translate-y-1/2 text-[120px] font-extrabold text-[#F2F2F2]'>
            {props.memoryProcess}
          </div>
        </Flex>
      </Card>
    </Box>
  );
};
