// app/providers.tsx
"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/app/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
