import { Container, Flex, Link } from '@radix-ui/themes';
import { HomeIcon } from '../../svg/HomeIcon';
import ListIcon from '../../svg/ListIcon';
import RegisterIcon from '../../svg/RegisterIcon';
import TestIcon from '../../svg/TestIcon';

export const Footer = () => {
  return (
    <Container maxWidth='100%'>
      <Flex justify='between' align='center'>
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
