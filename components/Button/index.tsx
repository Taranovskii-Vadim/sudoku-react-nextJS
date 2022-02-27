import { CSSProperties } from "react";

interface Props {
  label: string;
  styles?: CSSProperties;
  onClick: () => void;
}

const Button = ({ label, styles, onClick }: Props): JSX.Element => (
  <button
    style={{
      cursor: "pointer",
      border: "none",
      padding: "15px",
      textTransform: "uppercase",
      letterSpacing: 0.5,
      borderRadius: "5px",
      backgroundColor: "#4849f9",
      color: "#fff",
      ...styles,
    }}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
