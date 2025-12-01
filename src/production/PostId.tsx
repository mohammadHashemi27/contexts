import { useQuery } from "@tanstack/react-query";

import { getPostDetails } from "../apis/posts";

export const PostId = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPostDetails(4),
  });
  return <div> {data?.title}</div>;
};
