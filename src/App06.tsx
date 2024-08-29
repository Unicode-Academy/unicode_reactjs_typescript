import { useReducer } from "react";
type State = {
  count: number;
};
type Action = {
  type: "counter/increment" | "counter/decrement";
  payload?: unknown;
};
export default function App() {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "counter/increment": {
        return { ...state, count: state.count + 1 };
      }
      case "counter/decrement": {
        return { ...state, count: state.count + 1 };
      }
      default: {
        return state;
      }
    }
  };
  const initialState: State = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = (): void => {
    dispatch({
      type: "counter/increment",
    });
  };
  const handleDecrement = (): void => {
    dispatch({
      type: "counter/decrement",
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
