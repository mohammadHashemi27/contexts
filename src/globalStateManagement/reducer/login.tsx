import { useReducer } from "react";
import { ActionsLogins } from "./Logins";
import { Alert, Button } from "@chakra-ui/react";

export const Login = () => {
  const [user, dispatch] = useReducer(ActionsLogins, "");

  if (user)
    return (
      <>
        <Alert.Root
          fontFamily={"initial"}
          fontSize={"1.3em"}
          justifyContent={"center"}
          status="success"
          variant="subtle"
        >
          {user}خوش آمدید
          <Alert.Indicator />
        </Alert.Root>
        <Button
          variant={"outline"}
          colorPalette={"red"}
          borderRadius={6}
          onClick={() => dispatch({ type: "LOGOUT" })}
          mt={5}
        >
          خروج
        </Button>
      </>
    );

  return (
    <Button
      variant={"outline"}
      colorPalette={"green"}
      borderRadius={6}
      onClick={() => dispatch({ type: "LOGIN", userName: ":)" })}
    >
      ورود
    </Button>
  );
};
