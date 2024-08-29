import { useEffect, useRef } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<string[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      const value: string = inputRef.current?.value;
      valueRef.current.push(value);
    }
    console.log(valueRef.current);
  };
  //   useEffect((): void => {
  //     console.log(inputRef);
  //   }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Please fill..." />
        <button>Submit</button>
      </form>
    </div>
  );
}
