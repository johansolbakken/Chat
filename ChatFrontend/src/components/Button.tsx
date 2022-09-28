interface ButtonProps {
  onClick?: () => void;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        }
      }}
    >
      {props.text}
    </button>
  );
};
