import { Flex, Link, Text } from '@radix-ui/themes';

type Props = {
  userName: string;
  pageName: string;
  userSettingLink: string;
};

export const Header: React.FC<Props> = ({
  userName,
  pageName,
  userSettingLink,
}) => {
  return (
    <Flex display='flex' justify='between'>
      <Text color='sky'>{pageName}</Text>
      <Link color='green' href={userSettingLink}>
        {userName}
      </Link>
    </Flex>
  );
};
