import type { Post } from "../components/Posts";
import { config } from "../services/instance";

export const getPostsList = async () => {
  const res = await config.get<Post[]>("/posts");
  return res.data;
};
export const getPost = async (postId: number) => {
  const res = await config.get<Post>(`/posts/${postId}`);
  return res.data;
};
