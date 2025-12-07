import { useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  const [showUser] = useState(true);

  const user = [
    { id: 1, name: "ali" },
    { id: 2, name: "mohammad" },
    { id: 3, name: "Rena" },
  ];
  return (
    <>
      {showUser &&
        user.map((u) => (
          <ul className="list-group">
            <li className="list-group-item" key={u.id}>
              <Link to={`/user/${u.id}`}>{u.name}</Link>
            </li>
          </ul>
        ))}
    </>
  );
};
