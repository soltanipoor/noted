import "./Button.css";

const Button = ({ children, onClick, variant, type = "button" }) => {
  return (
    <button
      className={`note-button note-button--${variant}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
