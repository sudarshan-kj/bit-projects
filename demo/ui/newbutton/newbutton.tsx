import React from "react";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export type NewbuttonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Newbutton({ text }: NewbuttonProps) {
  return (
    <ChakraProvider>
      <Button variant="outline" colorScheme="red">
        {text}
      </Button>
    </ChakraProvider>
  );
}
