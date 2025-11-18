import  { useReducer, type ReactNode } from "react";
import { AuthReducer } from "./AuthReducer";
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode;
}
export const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(AuthReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
