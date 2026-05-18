import type { CardPropsType } from "./Card.types";
import style from "./Card.module.scss";
const Card = ({ icon: Icon, title, subtitle }: CardPropsType) => {
  return (
    <div className={style.card}>
      <span className={style.icon}>
        <Icon size={36} stroke="url(#gradient)">
          <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(240,0,255)" />
            <stop offset="100%" stopColor="pink" />
          </linearGradient>
        </Icon>
      </span>
      <div className={style.title}>{title}</div>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
