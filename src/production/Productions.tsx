import { useQuery } from "@tanstack/react-query";
import { getProduct, type Product } from "../apis/posts";
import {
  Badge,
  Button,
  Card,
  HStack,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Posts = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  if (isError) return <Text>Error loading products</Text>;

  if (isLoading)
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Card.Root key={i} overflow="hidden" borderRadius="md" boxShadow="md">
            <Skeleton height="180px" width="100%" />
            <Card.Body>
              <SkeletonText noOfLines={2} gap="3" />
              <HStack mt="3">
                <Skeleton height="20px" width="60px" />
                <Skeleton height="20px" width="60px" />
              </HStack>
            </Card.Body>
            <Card.Footer>
              <Skeleton height="30px" width="100%" />
            </Card.Footer>
          </Card.Root>
        ))}
      </div>
    );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
      }}
    >
      {data?.map((p: Product) => (
        <Card.Root
          key={p.id}
          overflow="hidden"
          borderRadius="md"
          boxShadow="md"
          marginTop={5}
        >
          <Image
            src={p.image}
            alt={p.title}
            height="180px"
            width="100%"
            objectFit="cover"
          />

          <Card.Body>
            <Card.Title fontSize="sm" mb="1">
              {p.title}
            </Card.Title>

            <Card.Description fontSize="xs">
              {p.description?.slice(0, 60) || "No description"}
            </Card.Description>

            <HStack mt="2">
              <Badge fontSize="0.65rem">{p.category}</Badge>
              <Badge fontSize="0.65rem">${p.price}</Badge>
            </HStack>
          </Card.Body>

          <Card.Footer>
            <NavLink to={`/productionDetails/${p.id}`}>
              <Button
                size="sm"
                width="100%"
                variant="outline"
                colorScheme="gray"
              >
                Show Details
              </Button>
            </NavLink>
          </Card.Footer>
        </Card.Root>
      ))}
    </div>
  );
};
