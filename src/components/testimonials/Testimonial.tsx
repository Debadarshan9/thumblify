import Header from "../common/header/Header";
import Carousel from "./carousel/Carousel";
import style from "./Testimonial.module.scss";
const Testimonial = () => {
  return (
    <div className={style.testimonialSection}>
      <Header
        headerName="Testimonial"
        headerTitle="Don't just take our words"
        headerSubtitle="Hear what our users say about us. We're always looking for ways to
        improve. If you have a positive experience with us, leave a review."
      />
      <div className={style.carousel}>
        <Carousel direction="scrollToLeft" />
        <Carousel direction="scrollToRight" />
      </div>
    </div>
  );
};

export default Testimonial;
