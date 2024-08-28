import { useEffect, useState } from "react";
import UserAdd from "./components/Users/UserAdd";
import UserList from "./components/Users/UserList";
import data from "./components/Users/data.json";
export default function App() {
  const [users, setUsers] = useState<
    {
      id: number | string;
      name: string;
      email: string;
      style: React.CSSProperties;
      histories: {
        id: number | string;
        name: string;
        status: boolean;
      }[];
    }[]
  >([]);
  useEffect(() => {
    setUsers(data);
  }, []);
  return (
    <div>
      <UserList users={users} />
      <UserAdd setUsers={setUsers} />
    </div>
  );
}
