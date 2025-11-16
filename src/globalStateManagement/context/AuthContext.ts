import React, { type Dispatch } from "react";

import type { AuthActions } from "../reducer/Logins";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthActions>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
