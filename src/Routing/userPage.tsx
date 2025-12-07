import { Outlet } from "react-router-dom";

import { Users } from "./user";

export const UserPage = () => {
  return (
    <div className="row">
      <div className="col">
        <Users />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};
