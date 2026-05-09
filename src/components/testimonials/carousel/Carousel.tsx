import style from "./Carousel.module.scss";
import elonMusk from "../../../assets/Elon Musk.jpg";

type CarouselProps = { direction?: string };

const Carousel = ({ direction = "scrollToRight" }: CarouselProps) => {
  return (
    <div className={style.carousel}>
      <div
        className={direction === "scrollToRight" ? style.reverse : style.group}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className={style.card}>
            <div className={style.header}>
              <img className={style.avatar} src={elonMusk} alt="" />
              <div className={style.user}>
                <p>Elon Musk </p>
                <p className={style.userName}>@elonmusk</p>
              </div>
            </div>
            <div className={style.description}>
              Elon Musk is a South African-born entrepreneur and businessman,
              known for founding and leading companies such as Tesla, SpaceX,
              and xAI. He has been the wealthiest person in the world since
              2025, with a net worth estimated at $809 billion as of April 2026.
            </div>
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className={direction === "scrollToRight" ? style.reverse : style.group}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className={style.card}>
            <div className={style.header}>
              <img className={style.avatar} src={elonMusk} alt="" />
              <div className={style.user}>
                <p>Elon Musk </p>
                <p className={style.userName}>@elonmusk</p>
              </div>
            </div>
            <div className={style.description}>
              Elon Musk is a South African-born entrepreneur and businessman,
              known for founding and leading companies such as Tesla, SpaceX,
              and xAI. He has been the wealthiest person in the world since
              2025, with a net worth estimated at $809 billion as of April 2026.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
