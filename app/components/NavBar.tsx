import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../public/images/logo.webp";
export const NavBar = () => {
  return (
    <HStack>
      <Image src="images/logo.webp" boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};
