import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counterSlice";
import { RootState } from "./redux/store";

export default function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
    </div>
  );
}
