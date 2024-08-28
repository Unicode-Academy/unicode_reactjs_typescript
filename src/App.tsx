// import { useState } from "react";

import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState<number>(0);
//   const handleIncrement = (): void => {
//     setCount(count + 1);
//   };
//   const handleDecrement = (): void => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleDecrement}>-</button>
//       <button onClick={handleIncrement}>+</button>
//     </div>
//   );
// };

// export default App;
type User = {
  name: string;
  email: string;
};
function App() {
  //   const [form, setForm] = useState<User | null | undefined>();
  const [form, setForm] = useState<User | null>({} as User);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value } as User);
    // setForm({ ...form, [e.target.name]: e.target.value });
    // setForm(null);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChangeValue}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
