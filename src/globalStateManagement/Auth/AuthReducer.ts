interface Login {
  type: "LOGIN";
  userName: string;
}

interface LogOut {
  type: "LOGOUT";
}

export type ActionLog = Login | LogOut;

export const AuthReducer = (_state: string, action: ActionLog): string => {
  switch (action.type) {
    case "LOGIN":
      return action.userName;
    case "LOGOUT":
      return "";
  }
};
