import { Alert, Button } from "@chakra-ui/react";
import { useLogins } from "./useLogins";
export const Login = () => {
  const { user, dispatch } = useLogins();

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
          onClick={() => dispatch({ type: "LOGOUT" })}
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
        onClick={() => dispatch({ type: "LOGIN", userName: "mohammadHashemi" })}
      >
        LOGIN
      </Button>
    </>
  );
};
