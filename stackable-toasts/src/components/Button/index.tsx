import "./Button.scss";

interface Button {
  text: string;
  color?: string;
}

const Button = ({ text, color }: Button) => {
  return (
    <button className="button" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
