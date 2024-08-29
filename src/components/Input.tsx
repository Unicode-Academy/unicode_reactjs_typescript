import { forwardRef, useImperativeHandle, useRef } from "react";
type InputHandle = {
  focus: () => void;
};
type Props = {
  value: string;
};
export default forwardRef<InputHandle, Props>(function Input({ value }, ref) {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current?.focus();
      },
    };
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Input..."
        ref={inputRef}
        defaultValue={value}
      />
    </div>
  );
});
