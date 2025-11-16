import { Alert, Button } from "@chakra-ui/react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const Login = () => {
  const { user, dispatch } = useContext(AuthContext);
  if (user)
    return (
      <>
        <Alert.Root
          fontFamily={"initial"}
          fontSize={"1.3em"}
          justifyContent={"center"}
          status="neutral"
          variant="subtle"
        >
          {user}
          <Alert.Indicator />
        </Alert.Root>
        <Button
          variant={"outline"}
          colorPalette={"gray"}
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
      colorPalette={"gray"}
      borderRadius={6}
      onClick={() => dispatch({ type: "LOGIN", userName: "mohammadHashemi" })}
    >
      ورود
    </Button>
  );
};
