import { CSSProperties } from "react";

interface Props {
  label: string;
  styles?: CSSProperties;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  label,
  styles,
  disabled = false,
  onClick,
}: Props): JSX.Element => (
  <button
    style={{
      cursor: disabled ? "not-allowed" : "pointer",
      border: "none",
      padding: "15px",
      textTransform: "uppercase",
      letterSpacing: 0.5,
      borderRadius: "5px",
      backgroundColor: "#4849f9",
      color: "#fff",
      ...styles,
    }}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
