'use client';

import { Select as SelectUI } from '@radix-ui/themes';
import { Responsive } from '@radix-ui/themes/props';

type Option = {
  value: string;
  label: string;
};

type Props = {
  option: Option[];
  size: Responsive<'1' | '2' | '3'> | undefined;
  placeholder: string;
};

export const Select: React.FC<Props> = (props) => {
  return (
    <SelectUI.Root size={props.size}>
      <SelectUI.Trigger placeholder={props.placeholder} />
      <SelectUI.Content>
        <SelectUI.Group>
          {props.option.map((optionItem) => {
            return (
              <>
                <SelectUI.Item value={optionItem.value}>
                  {optionItem.label}
                </SelectUI.Item>
              </>
            );
          })}
        </SelectUI.Group>
      </SelectUI.Content>
    </SelectUI.Root>
  );
};
