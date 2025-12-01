import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../apis/posts";
import {
  Alert,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  Heading,
  List,
  ListItem,
  HStack,
  Box,
} from "@chakra-ui/react";
import "../components/swiper.css";
export const ProductionUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  if (isError)
    return (
      <Alert.Root status="error" borderRadius="md" p={4}>
        <Alert.Indicator />
        <Alert.Title>There was an error processing your request</Alert.Title>
      </Alert.Root>
    );

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" p={10}>
        <Spinner size="xl" />
      </Box>
    );

  return (
    <Card.Root maxW="sm" borderRadius="lg" boxShadow="md" marginTop={20}>
      <CardHeader>
        <Heading size="md" textAlign={"center"}>
          Store List
        </Heading>
      </CardHeader>

      <CardBody>
        <List.Root gap="3">
          {data?.map((user) => (
            <ListItem key={user.id}>
              <HStack>
                <img src={user.image} alt="product" width={50} height={50} />
                <Card.Title className="fs-6 mt-2">{user.category}</Card.Title>
              </HStack>
            </ListItem>
          ))}
        </List.Root>
      </CardBody>
    </Card.Root>
  );
};
