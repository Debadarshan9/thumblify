import style from "./TiltImage.module.scss";
import image from "../../../assets/hero.png";
const TiltImage = () => {
  return (
    <figure className={style.tiltContainer}>
      <div className={style.imgContainer}>
        <img src={image} alt="Hero Image" />
      </div>
    </figure>
  );
};

export default TiltImage;
