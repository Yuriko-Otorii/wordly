import { Footer } from '@/features/ui/layout/Footer';
import { Header } from '@/features/ui/layout/Header';
import { Container, Flex } from '@radix-ui/themes';

export default function Home() {
  return (
    <Container
      height='100vh'
      size={{
        initial: '1',
        md: '2',
        xl: '4',
      }}
    >
      <Flex direction='column' height='100%' width='100%' justify='between'>
        <Header />
        <Flex flexGrow='1' width='100%' direction='column' height='90vh'>
          {/* Content goes here */}
          contents
        </Flex>
        <Footer />
      </Flex>
    </Container>
  );
}
