'use client';

import { Box, TextField } from '@radix-ui/themes';
import { Responsive } from '@radix-ui/themes/props';

type Props = {
  maxWidth: string;
  size: Responsive<'1' | '2' | '3'>;
  placeholder: string;
};

export const Input: React.FC<Props> = (props) => {
  return (
    <Box maxWidth={props.maxWidth}>
      <TextField.Root size={props.size} placeholder={props.placeholder} />
    </Box>
  );
};
