import { useEffect, useState } from "react";

interface InputProps {
  password?: boolean;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (props.onChange !== undefined) {
      props.onChange(value);
    }
  }, [props, value]);

  return (
    <input
      className="border"
      type={
        props.password !== undefined
          ? props.password!
            ? "password"
            : "text"
          : "text"
      }
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
