import React, { useCallback } from "react";

export default function App() {
  const handleClick: React.MouseEventHandler<HTMLParagraphElement> =
    useCallback((e: React.MouseEvent<HTMLParagraphElement>) => {
      // console.log("clicked", text);
      console.log(e);
    }, []);
  return (
    <div>
      <h1>Count: 0</h1>
      {/* <button onClick={() => handleClick("Hoàng An")}>Click me</button> */}
      {/* <button onClick={handleClick}>Click me</button> */}
      <p onClick={handleClick}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        suscipit, impedit reiciendis id voluptas, recusandae necessitatibus
        inventore, nam dignissimos sunt ea repellendus deserunt omnis enim
        aliquam maxime itaque natus facilis.
      </p>
    </div>
  );
}
