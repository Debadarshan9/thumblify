import type { ButtonProps } from "./Button.types";
import style from "./Button.module.scss";
import { classes } from "../../../utils/utils";
const Button = ({
  fullWidth,
  text,
  variant = "contained",
  disabled,
  className,
  handleClick,
  rounded,
  startIcon: StartIcon,
  endIcon: EndIcon,
}: ButtonProps) => {
  const variantClass = {
    text: style.text,
    outlined: style.outlined,
    contained: style.contained,
  };
  return (
    <button
      className={classes(
        style.button,
        variantClass[variant],
        disabled ? style.disabled : "",
        className ? className : "",
        rounded ? style.rounded : "",
        fullWidth ? style.fullWidth : "",
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {StartIcon && <StartIcon className={style.icon} />}
      {text}
      {EndIcon && <EndIcon className={style.icon} />}
    </button>
  );
};

export default Button;
