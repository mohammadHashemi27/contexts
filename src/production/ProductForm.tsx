import { Button, Input, InputElement, HStack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const ProductForm = () => (
  <HStack maxW="320px" gap={2} >
    <InputElement pointerEvents="none">
      <LuSearch />
    </InputElement>
    <Input placeholder=" " size="sm" />

    <Button
      size="sm"
      colorScheme="blue"
      borderRadius={5}
      variant={"outline"}
      colorPalette={"gray"}
    >
      Search
    </Button>
  </HStack>
);

export default ProductForm;
