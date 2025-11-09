// 📁 src/react-query/useUsers.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface User {
  id: number;
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

interface Props {
  page: number;
  pageSize: number;
}

const fetchUsers = async ({ page, pageSize }: Props) => {
  const res = await axios.get<User[]>("https://fakestoreapi.com/users", {
    params: {
      _start: (page - 1) * pageSize,
      _limit: pageSize,
    },
  });
  return res.data;
};

export const useUsers = (page: number, pageSize: number) => {
  return useQuery<User[]>({
    queryKey: ["users", page, pageSize],
    queryFn: () => fetchUsers({ page, pageSize }),
    staleTime: 1000 * 60,
  });
};
