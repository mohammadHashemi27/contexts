import type { Dispatch } from "react";
import type { ActionLog } from "./AuthReducer";
import React from "react";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<ActionLog>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
