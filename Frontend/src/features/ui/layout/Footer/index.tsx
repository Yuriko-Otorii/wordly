import { Container, Flex, Link } from '@radix-ui/themes';
import { HomeIcon } from '../../svg/HomeIcon';
import ListIcon from '../../svg/ListIcon';
import RegisterIcon from '../../svg/RegisterIcon';
import TestIcon from '../../svg/TestIcon';

export const Footer = () => {
  return (
    <Container width='100%' flexGrow='1' height='5vh'>
      <Flex justify='between' align='center' position='sticky'>
        <Link>
          <HomeIcon />
        </Link>
        <Link>
          <RegisterIcon />
        </Link>
        <Link>
          <TestIcon />
        </Link>
        <Link>
          <ListIcon />
        </Link>
      </Flex>
    </Container>
  );
};
