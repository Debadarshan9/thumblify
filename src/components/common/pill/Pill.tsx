import type { PillPropsType } from "./Pill.types";
import style from "./Pill.module.scss";
import { classes } from "../../../utils/utils";
const Pill = ({ text, overrideCss }: PillPropsType) => {
  const modifiedCss = overrideCss ? overrideCss : "";
  return <span className={classes(style.pill, modifiedCss)}>{text}</span>;
};

export default Pill;
