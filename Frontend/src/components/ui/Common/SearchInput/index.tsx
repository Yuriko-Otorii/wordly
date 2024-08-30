'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { Responsive } from '@radix-ui/themes/props';

type Props = {
  size: Responsive<'1' | '2' | '3'>;
  placeholder: string;
};

export const SearchInput: React.FC<Props> = (props) => {
  return (
    <TextField.Root placeholder={props.placeholder} size={props.size}>
      <TextField.Slot>
        <MagnifyingGlassIcon height='16' width='16' />
      </TextField.Slot>
    </TextField.Root>
  );
};
