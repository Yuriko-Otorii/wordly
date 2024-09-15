'use client';

import { Button as ButtonUI  } from '@radix-ui/themes';

type Props = {
  text: string;
  width?: string;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <>
      <ButtonUI
        variant='solid'
        radius='large'
        className='h-[42px] bg-[#54E1F2] text-lg text-white'
        style={{ width: props.width }} 
      >
        {props.text}
      </ButtonUI>
    </>
  );
};
