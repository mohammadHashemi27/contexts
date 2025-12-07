import { useParams } from "react-router-dom";

export const UserDetailsPage = () => {
  const params = useParams();
  console.log(params);

  return <p>user {params.id} </p>;
};
