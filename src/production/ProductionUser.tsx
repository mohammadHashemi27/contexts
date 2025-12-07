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
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
    <Card.Root
      maxW="sm"
      borderRadius="2xl"
      boxShadow="lg"
      marginTop={20}
      bg="white"
      color="gray.800"
      p={4}
      height="450px"
    >
      <CardHeader textAlign="center">
        <Heading size="md">Store List</Heading>
      </CardHeader>

      <CardBody overflowY="auto" maxH="350px" pr="2">
        <List.Root gap="4">
          {data?.map((user) => (
            <NavLink
              key={user.id}
              to={`/productionDetails/${user.id}`}
              style={{ textDecoration: "none", color: "inherit" }} 
            >
              <ListItem
                _hover={{
                  bg: "gray.100",
                  borderRadius: "lg",
                  transition: "0.2s",
                  cursor: "pointer",
                }}
                p="2"
              >
                <HStack>
                  <img
                    src={user.image}
                    alt="product"
                    width={55}
                    height={55}
                    style={{
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />

                  <Box>
                    <Text fontWeight="medium">{user.category}</Text>

                    <Text fontSize="sm" color="gray.500">
                      {user.title?.slice(0, 20)}...
                    </Text>
                  </Box>
                </HStack>
              </ListItem>
            </NavLink>
          ))}
        </List.Root>
      </CardBody>
    </Card.Root>
  );
};
