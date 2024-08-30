import { useEffect, useRef } from "react";
import Input from "./components/Input";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(inputRef);
  });
  const handleClick: React.MouseEventHandler = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <Input ref={inputRef} value={"Hoàng An"} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

//forwardRef
//useImperativeHandle
