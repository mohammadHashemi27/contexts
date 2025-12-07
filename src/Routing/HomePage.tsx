import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi et
        aspernatur ullam nobis voluptatum odit minus. Aliquid magni ipsa
        eligendi, officia nisi adipisci nihil minus magnam cum eaque, cumque
        suscipit?
        <Link to={"/user"}>users</Link>
      </p>
    </>
  );
};
