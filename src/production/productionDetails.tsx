import { useParams } from "react-router-dom";
import { Button, Card, Box, HStack, Badge, Image } from "@chakra-ui/react";
import { useProductionStore } from "./ProductionZus";
import { getProduct, type Product } from "../apis/posts";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { login } = useProductionStore();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  if (isLoading) {
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
        <Card.Root width="320px" height="300px" bg="white" borderRadius="lg" />
      </Box>
    );
  }

  const product = products?.find((p: Product) => String(p.id) === id);
  if (!product) return <p>Product not found</p>;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bgImage={`url(${product.image})`} // تصویر محصول در بک‌گراند
      bgSize="cover"
      bgRepeat="no-repeat"
      bgBlendMode="overlay" // کم‌رنگ کردن بک‌گراند
      bgColor="blackAlpha.600"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={1000}
      padding={4}
    >
      <Card.Root
        flexDirection={{ base: "column", md: "row" }}
        overflow="hidden"
        maxW="xl"
        bg="whiteAlpha.900" // نیمه شفاف برای خوانایی متن
        borderRadius="lg"
        boxShadow="xl"
      >
        {/* تصویر محصول داخل کارت */}
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: "200px" }}
          src={product.image}
          alt={product.title}
        />

        {/* محتوای کارت */}
        <Box flex="1" display="flex" flexDirection="column">
          <Card.Body>
            <Card.Title mb="2">{product.title}</Card.Title>
            <Card.Description fontSize="sm" mb="2">
              {product.description}
            </Card.Description>

            <HStack gap={2} mt="2">
              <Badge colorScheme="teal">{product.category}</Badge>
              <Badge colorScheme="orange">${product.price}</Badge>
            </HStack>
          </Card.Body>

          <Card.Footer mt="auto" display="flex" justifyContent="space-between">
            <Button variant="outline" onClick={() => window.history.back()}>
              Close
            </Button>
            <Button
              variant="solid"
              colorScheme="gray"
              onClick={() => login(product)}
            >
              Add
            </Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Box>
  );
};

export default ProductDetails;
