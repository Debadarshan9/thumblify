import type { CardPropsType } from "./Card.types";
import style from "./Card.module.scss";
const Card = ({ icon, title, subtitle }: CardPropsType) => {
  return (
    <div className={style.card}>
      <span className={style.icon}>{icon}</span>
      <div className={style.title}>{title}</div>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
