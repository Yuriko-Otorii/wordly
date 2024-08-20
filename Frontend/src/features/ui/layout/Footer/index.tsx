import { Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { HomeIcon } from '../../svg/HomeIcon';
import ListIcon from '../../svg/ListIcon';
import RegisterIcon from '../../svg/RegisterIcon';
import TestIcon from '../../svg/TestIcon';

export const Footer = () => {
  const searchParams = useSearchParams();
  const getParams = searchParams ? searchParams.get('getParams') : null;

  const isActive = (paramValue: string) => {
    console.log(
      `Checking if ${paramValue} is active: ${getParams === paramValue}`,
    );
    return getParams === paramValue;
  };
  console.log(`getParams value: ${getParams}`);
  return (
    <Flex justify='between' align='center' position='sticky'>
      <Link href='/home'>
        <HomeIcon color={isActive('home') ? '#C5DF16' : '#4289A7'} />
      </Link>
      <Link href='/register'>
        <RegisterIcon color={isActive('home') ? '#C5DF16' : '#4289A7'} />
      </Link>
      <Link href='/test'>
        <TestIcon color={isActive('home') ? '#C5DF16' : '#4289A7'} />
      </Link>
      <Link href='/list'>
        <ListIcon color={isActive('home') ? '#C5DF16' : '#4289A7'} />
      </Link>
    </Flex>
  );
};
