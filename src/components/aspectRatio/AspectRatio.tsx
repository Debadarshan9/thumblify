import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";
import style from "./AspectRatio.module.scss";
import { classes } from "../../utils/utils";
type AspectRatiosProps = {
  value: string;
  onChange: (value: string) => void;
};
const AspectRatio = ({ value, onChange }: AspectRatiosProps) => {
  const icons = [
    { label: "16:9", icon: RectangleHorizontal },
    { label: "1:1", icon: Square },
    { label: "9:16", icon: RectangleVertical },
  ];

  return (
    <div className={style.aspectRatioContainer}>
      <div>Aspect Ratio</div>
      <div className={style.optionsWrapper}>
        {icons.map((option) => {
          const selected = option.label === value;
          const Icon = option.icon;
          return (
            <div
              className={classes(
                style.option,
                selected ? style.activeOption : "",
              )}
              key={option.label}
              onClick={() => {
                if (option.label !== value) {
                  onChange(option.label);
                }
              }}
            >
              <Icon />
              <div>{option.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AspectRatio;
