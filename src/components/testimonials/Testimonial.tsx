import Header from "../common/header/Header";
import Carousel from "./carousel/Carousel";
import style from "./Testimonial.module.scss";
const Testimonial = () => {
  return (
    <div className={style.testimonialSection}>
      <Header
        headerName="Testimonial"
        headerTitle="Loved by creators"
        headerSubtitle="See how our AI thumbnails are helping channels explode their views."
      />
      <div className={style.carousel}>
        <Carousel direction="scrollToLeft" />
        <Carousel direction="scrollToRight" />
      </div>
    </div>
  );
};

export default Testimonial;
