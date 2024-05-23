import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={'60px'} />
      <Text>Game App</Text>
    </HStack>
  );
};

export default Navbar;