"use client";
import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../public/images/logo.webp";
import ColorModeSwitch from "@/app/components/ColorModeSwitch";
export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="5px">
      <Image src="images/logo.webp" boxSize="60px"></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
