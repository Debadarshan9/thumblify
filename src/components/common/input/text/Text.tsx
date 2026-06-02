import { classes } from "../../../../utils/utils";
import style from "./Text.module.scss";
import type { TextProps } from "./TextProps.types";

const TextFieldComponent = ({
  label,
  placeholder,
  type,
  icon: Icon,
  multiline,
  value,
  onChange,
  maxLength,
  className,
}: TextProps) => {
  return (
    <div className={style.inputWrapper}>
      <div>{label}</div>
      <div className={classes(style.input, className ? className : "")}>
        {!multiline && Icon && <Icon size={24} className={style.icon} />}
        {multiline ? (
          <textarea
            rows={multiline}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
          ></textarea>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
          />
        )}
      </div>
    </div>
  );
};

export default TextFieldComponent;
