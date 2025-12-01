import { Alert, Button } from "@chakra-ui/react";

import useAuthStore from "./AuthZus";
export const Login = () => {
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <Alert.Root
          fontFamily={"initial"}
          fontSize={"1.3em"}
          justifyContent={"center"}
          colorPalette={"blue"}
        >
          {user}
          <Alert.Indicator />
        </Alert.Root>
        <Button
          variant={"plain"}
          colorPalette={"blue"}
          onClick={() => logout()}
        >
          LOGOUT
        </Button>
      </>
    );
  return (
    <>
      <Button
        variant={"plain"}
        colorPalette={"blue"}
        onClick={() => login("MOHAMMAD")}
      >
        LOGIN
      </Button>
    </>
  );
};
