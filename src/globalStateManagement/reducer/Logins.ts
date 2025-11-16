interface LoginAction {
  type: "LOGIN";
  userName: string;
}
interface LogOutAction {
  type: "LOGOUT";
}

export type AuthActions = LogOutAction | LoginAction;

export const ActionsLogins = (_state: string, actions: AuthActions): string => {
  switch (actions.type) {
    case "LOGOUT":
      return "";
    case "LOGIN":
      return actions.userName;
  }
};
