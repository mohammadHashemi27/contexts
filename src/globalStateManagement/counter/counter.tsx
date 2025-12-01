import { Button } from "@chakra-ui/react";
import useCounterStore from "./CounterZustand";

export const Counter = () => {
  const { counter, increment, min, reset } = useCounterStore();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 20px",
        borderRadius: "10px",
        background: "#eeece89a",
        color: "black",
        width: "fit-content",
      }}
    >
      <h3 style={{ margin: 0 }}>Counter: {counter}</h3>

      <Button
        borderRadius={6}
        colorPalette={"blue"}
        variant="subtle"
        onClick={increment}
        style={{ minWidth: "50px" }}
      >
        +
      </Button>

      <Button
        borderRadius={6}
        colorPalette={"blue"}
        variant="subtle"
        onClick={min}
        style={{ minWidth: "50px" }}
      >
        -
      </Button>

      <Button
        borderRadius={6}
        colorPalette={"blue"}
        variant="subtle"
        onClick={reset}
        colorScheme="red"
      >
        Reset
      </Button>
    </div>
  );
};
