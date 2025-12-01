import { config, configUser } from "../services/instance";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const getProduct = async () => {
  const res = await config.get<Product[]>("/products");
  return res.data;
};

interface Users {
  id: number;
  username: string;
}
export const getUsers = async () => {
  const res = await configUser.get<Users[]>("/users");
  return res.data;
};
