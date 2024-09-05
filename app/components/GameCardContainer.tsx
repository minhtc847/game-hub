import React from "react";
import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};
export default GameCardContainer;
