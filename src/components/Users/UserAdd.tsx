import React, { useState } from "react";
type UserAddProps = {
  setUsers: React.Dispatch<
    React.SetStateAction<
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
    >
  >;
  // users: {
  //   id: number | string;
  //   name: string;
  //   email: string;
  //   style: React.CSSProperties;
  //   histories: {
  //     id: number | string;
  //     name: string;
  //     status: boolean;
  //   }[];
  // }[];
};
export default function UserAdd({ setUsers }: UserAddProps) {
  const [form, setForm] = useState<{
    name: string;
    email: string;
  }>({
    name: "",
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUsers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: form.name,
        email: form.email,
        style: {},
        histories: [],
      },
    ]);
  };
  return (
    <div>
      <h1>User Add</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}
