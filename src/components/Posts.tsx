// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsList } from "../apis/posts";

import { Spinner, Text } from "@chakra-ui/react";

export interface Post {
  userId: number;
  id: number;
  title: string;
}
export const Posts = () => {
  // const [data, setData] = useState<Post[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError("");
  //       const response = await getPostsList();
  //       setData(response);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setError("error");
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchPost();
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p style={{ color: "red" }}>{error}</p>;

  const { isError, isLoading, data } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: getPostsList,
  });

  if (isError) return <Text>error</Text>;
  if (isLoading) return <Spinner />;
  if (!data || data.length === 0) return <Text>No Data</Text>;
  return (
    <div>
      {data.map((d) => (
        <p key={d.id}>{d.title}</p>
      ))}
    </div>
  );
};
