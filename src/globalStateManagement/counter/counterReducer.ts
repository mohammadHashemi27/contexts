 export interface Action {
  type: "MIN" | "INCREMENT" | "RESET";
}
export const counterReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "MIN":
      return state - 1;
    case "RESET":
      return 0;
  }
};
