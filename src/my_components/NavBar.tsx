import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize={"80px"}></Image>
        <Text textStyle="xl">NavBar</Text>
      </HStack>
    </>
  );
};

export default NavBar;
