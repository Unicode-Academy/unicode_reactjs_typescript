import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/slice/userSlice";
import { RootState, store } from "./redux/store";
export default function App() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const user = useSelector((state: RootState) => state.users.user);
  console.log(user);

  useEffect(() => {
    dispatch(getUser(1));
  }, []);
  return <div>App</div>;
}
