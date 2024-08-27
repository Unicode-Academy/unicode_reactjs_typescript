import users from "./data.json";
import UserItem from "./UserItem";


export default function UserList() {
  return <div>
    {users.map((user) => {
      return <UserItem key={user.id} user={user}/>
    })}
  </div>;
}
