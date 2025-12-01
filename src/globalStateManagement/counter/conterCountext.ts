import React from "react";
import type { Action } from "./counterReducer";

interface counterContextType {
  action: Action;
  dispatch: Action;
}

const counterContext = React.createContext<counterContextType>(
  {} as counterContextType
);

export default counterContext;
