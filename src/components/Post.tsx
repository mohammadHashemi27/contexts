import { useQuery } from "@tanstack/react-query";
import { getPost } from "../apis/posts";
import { Spinner } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
export const Post = () => {
  const id = 16;
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

  if (isError) return <Text>error</Text>;
  if (isLoading) return <Spinner />;
  if (!data) return <Text>No Data</Text>;
  return <div>{data.title}</div>;
};
