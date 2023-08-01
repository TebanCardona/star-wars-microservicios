import { createContext, useReducer } from "react";
import { IState, IAction } from "@/interfaces";

interface ContextProps {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

interface ProviderProps {
  children: React.ReactNode;
}
const INITIAL_STATE: IState = {
  movil: false,
  width: 0,
  more: false,
  height: 0,
};
const ContextReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "SIZE":
      if (state.movil === action.payload) return state;
      return {
        ...state,
        movil: action.payload,
      };
    case "WIDTH":
      if (state.width === action.payload) return state;
      return {
        ...state,
        width: action.payload,
      };
    case "HEIGHT":
      if (state.height === action.payload) return state;
      return {
        ...state,
        height: action.payload,
      };
    case "MORE":
      return {
        ...state,
        more: !state.more,
      };
    default:
      return state;
  }
};

export const Context = createContext<ContextProps>({
  state: INITIAL_STATE,
  dispatch: () => {},
});
export const ContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(ContextReducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
