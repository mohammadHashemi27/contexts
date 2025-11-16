import React, { useReducer, type ReactNode } from "react";
import { ActionsLogins } from "./reducer/Logins";
import AuthContext from "./context/AuthContext";

interface Props {
  children: ReactNode;
}
export const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(ActionsLogins, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
