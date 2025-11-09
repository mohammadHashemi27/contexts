// 📁 src/components/Users.tsx
import { useState } from "react";
import { useUsers } from "../react-query/UseTodos";
import {
  Box,
  Text,
  Spinner,
  Icon,
  List,
  ListItem,
  IconButton,
  ButtonGroup,
  Pagination,
} from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { LuCircleCheck, LuCircleDashed } from "react-icons/lu";

export const Users = () => {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data: users, isPending, isError } = useUsers(page, pageSize);

  if (isPending)
    return (
      <Text textAlign="center" mt={5}>
        <Spinner color="blue.500" />
      </Text>
    );

  if (isError)
    return (
      <Text color="red.400" textAlign="center" mt={5}>
        Something went wrong ❌
      </Text>
    );

  return (
    <>
      <Box
        maxW={{ base: "90%", sm: "md", md: "lg" }}
        mx="auto"
        mt={5}
        p={{ base: 2, sm: 4 }}
        bg="blue.50"
        borderRadius="2xl"
        boxShadow="md"
      >
        <List.Root gap={3}>
          {users?.map((user) => (
            <ListItem
              key={user.id}
              display="flex"
              alignItems="center"
              gap={3}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              px={3}
              py={2}
              borderRadius="xl"
              transition="all 0.2s ease-in-out"
              cursor="pointer"
              _hover={{
                bg: "blue.100",
                transform: "scale(1.02)",
                color: "teal.500",
              }}
              onClick={() => setSelectedId(user.id)}
            >
              <Icon
                as={selectedId === user.id ? LuCircleCheck : LuCircleDashed}
                color={selectedId === user.id ? "green.400" : "gray.400"}
                boxSize={{ base: 5, md: 6 }}
                flexShrink={0}
              />
              <Text>
                {user.name.firstname} {user.name.lastname} —{" "}
                <Text as="span" color="gray.500">
                  @{user.username}
                </Text>
              </Text>
            </ListItem>
          ))}
        </List.Root>
      </Box>

      <Box textAlign="center" mt={6}>
        <Pagination.Root
          count={60} 
          page={page}
          onPageChange={(e) => setPage(e.page)}
        >
          <ButtonGroup gap="4" size="sm" variant="ghost">
            <Pagination.PrevTrigger asChild>
              <IconButton
                aria-label="Previous Page"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
              >
                <HiChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.PageText>Page {page}</Pagination.PageText>

            <Pagination.NextTrigger asChild>
              <IconButton
                aria-label="Next Page"
                disabled={users?.length < pageSize}
                onClick={() => setPage((p) => p + 1)}
              >
                <HiChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </Box>
    </>
  );
};
