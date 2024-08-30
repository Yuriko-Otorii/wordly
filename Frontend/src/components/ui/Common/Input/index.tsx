'use client';

import { Text, TextField } from '@radix-ui/themes';
import { Responsive } from '@radix-ui/themes/props';

type Props = {
  size: Responsive<'1' | '2' | '3'>;
  placeholder: string;
  label: string;
};

export const Input: React.FC<Props> = (props) => {
  return (
    <>
      <Text size='2' as='label'>
        {props.label}
      </Text>
      <TextField.Root size={props.size} placeholder={props.placeholder} />
    </>
  );
};
