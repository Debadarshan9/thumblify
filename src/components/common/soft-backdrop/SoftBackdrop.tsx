import style from "./SoftBackdrop.module.scss";
const SoftBackdrop = () => {
  return (
    <div className={style.backdrop}>
      <div className={style.blurOne} />
      <div className={style.blurTwo} />
    </div>
  );
};

export default SoftBackdrop;
