import {
  Avatar,
  Button,
  Card,
  Box,
  Stack,
  HStack,
  SkeletonCircle,
  Skeleton,
} from "@chakra-ui/react";
import { useProductionStore } from "./ProductionZus";
import { getProduct, type Product } from "../apis/posts";
import { useQuery } from "@tanstack/react-query";

export interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails = ({ product, onClose }: ProductDetailsProps) => {
  const { login } = useProductionStore();
  const { isLoading } = useQuery({
    queryKey: ["Product"],
    queryFn: getProduct,
  });

  const SkeletonCard = (
    <Card.Root
      width="320px"
      padding="16px"
      boxShadow="xl"
      borderRadius="lg"
      bg="white"
      maxH="80vh"
      overflowY="auto"
    >
      <Stack gap="4">
        <HStack>
          <SkeletonCircle size="12" />
          <Stack flex="1">
            <Skeleton height="14px" width="70%" />
            <Skeleton height="14px" width="50%" />
          </Stack>
        </HStack>

        <Skeleton height="230px" borderRadius="md" />

        <Skeleton height="18px" width="80%" />
        <Skeleton height="18px" width="60%" />

        <HStack justifyContent="space-between" pt="4">
          <Skeleton height="35px" width="80px" borderRadius="md" />
          <Skeleton height="35px" width="80px" borderRadius="md" />
        </HStack>
      </Stack>
    </Card.Root>
  );

  if (isLoading)
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        bg="blackAlpha.600"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={1000}
      >
        {SkeletonCard}
      </Box>
    );

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="blackAlpha.600"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={1000}
    >
      <Card.Root
        width="320px"
        maxH="80vh"
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
        display="flex"
        flexDirection="column"
      >
        <Card.Body flex="1" overflowY="auto" padding="16px" gap="3">
          <Avatar.Root size="2xl" shape="rounded">
            <Avatar.Image src={product.image} />
          </Avatar.Root>

          <Card.Title fontSize="lg">{product.title}</Card.Title>
          <Card.Description fontSize="sm">
            {product.description}
          </Card.Description>

          <p>Price: {product.price}$</p>
          <p>Category: {product.category}</p>
        </Card.Body>

        <Card.Footer
          position="sticky"
          bottom={0}
          bg="white"
          borderTop="1px solid #e2e8f0"
          justifyContent="space-between"
          padding="16px"
          zIndex={10}
        >
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>

          <Button
            variant="ghost"
            colorScheme="gray"
            onClick={() => login(product)}
          >
            Add
          </Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
};

export default ProductDetails;
