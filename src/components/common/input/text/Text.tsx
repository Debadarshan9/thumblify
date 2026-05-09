import style from "./Text.module.scss";
import type { TextProps } from "./TextProps.types";

const TextFieldComponent = ({
  label,
  placeholder,
  type,
  icon: Icon,
  multiline,
}: TextProps) => {
  return (
    <div className={style.inputWrapper}>
      <div>{label}</div>
      <div className={style.input}>
        {!multiline && Icon && <Icon size={24} className={style.icon} />}
        {multiline ? (
          <textarea rows={multiline} placeholder={placeholder}></textarea>
        ) : (
          <input type={type} placeholder={placeholder} />
        )}
      </div>
    </div>
  );
};

export default TextFieldComponent;
