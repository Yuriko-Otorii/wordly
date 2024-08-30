'use client';

import { Box, Text, TextField } from '@radix-ui/themes';
import { Responsive } from '@radix-ui/themes/props';

type Props = {
  maxWidth: string;
  size: Responsive<'1' | '2' | '3'>;
  placeholder: string;
  label: string;
};

export const Input: React.FC<Props> = (props) => {
  return (
    <Box maxWidth={props.maxWidth}>
      <Text size='2' as='label'>
        {props.label}
      </Text>
      <TextField.Root size={props.size} placeholder={props.placeholder} />
    </Box>
  );
};
