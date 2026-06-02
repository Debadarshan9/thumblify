import { classes, colorSchemes } from "../../utils/utils";
import style from "./ColorSchemeSelector.module.scss";
type ColorSchemeSelectorProps = {
  value: string;
  onChange: (color: string) => void;
};
const ColorSchemeSelector = ({ value, onChange }: ColorSchemeSelectorProps) => {
  return (
    <div className={style.container}>
      <div>Color Scheme</div>
      <div className={style.colorSchemeContainer}>
        {colorSchemes.map((scheme) => (
          <button
            className={classes(
              style.schemeBtn,
              value === scheme.id ? style.selectedSchemeBtn : "",
            )}
            key={scheme.id}
            onClick={() => onChange(scheme.id)}
          >
            {scheme.colors.map((color) => (
              <div
                className={style.colors}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </button>
        ))}
      </div>
      <p>Selected : {colorSchemes.find((s) => s.id === value)?.name}</p>
    </div>
  );
};

export default ColorSchemeSelector;
