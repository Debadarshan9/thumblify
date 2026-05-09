import Pill from "../pill/Pill";
import type { HeaderPropsType } from "./Header.types";
import style from "./Header.module.scss";
const Header = ({
  headerName,
  headerTitle,
  headerSubtitle,
}: HeaderPropsType) => {
  return (
    <div className={style.header}>
      <Pill text={headerName} />
      <div className={style.headerTitle}>{headerTitle}</div>
      <div className={style.headerSubtitle}>{headerSubtitle}</div>
    </div>
  );
};

export default Header;
