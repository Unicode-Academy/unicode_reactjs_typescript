import UserItem from "./UserItem";
type UsersProps = {
  users: {
    id: number | string;
    name: string;
    email: string;
    style: React.CSSProperties;
    histories: {
      id: number | string;
      name: string;
      status: boolean;
    }[];
  }[];
};
export default function UserList({ users }: UsersProps) {
  return (
    <div style={{ height: "200px", overflow: "auto" }}>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}
