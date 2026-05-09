import { useRef } from "react";
import style from "./Hero.module.scss";
import TiltImage from "./tilt-image/TiltImage";
import { Check, Video } from "lucide-react";
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / (rect.height / 2)) * -3;
    const rotateY = ((x - centerX) / (rect.width / 2)) * 3;

    ref.current!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = () => {
    ref.current!.style.transform = "rotateX(0deg) rotateY(0deg)";
  };
  return (
    <section className={style.heroSection}>
      <div className={style.heroTitle}>
        Free template to start
        <div>
          your <span className={style.highlight}>React.js site.</span>
        </div>
      </div>
      <div className={style.heroSubtitle}>
        No complexity. No noise. Just clean, reliable automation to boost your
        team's efficiency.
      </div>
      <div className={style.heroActions}>
        <button className={style.primaryBtn}>Get Started</button>
        <button className={style.secondaryBtn}>
          <Video /> Watch Demo
        </button>
      </div>
      <div className={style.heroFeatures}>
        <p className={style.feature}>
          <span className={style.tickMark}>
            <Check />
          </span>{" "}
          <span>No credit card</span>
        </p>
        <p className={style.feature}>
          <span className={style.tickMark}>
            <Check />
          </span>{" "}
          <span>30days free trial</span>
        </p>
        <p className={style.feature}>
          <span className={style.tickMark}>
            <Check />
          </span>{" "}
          <span>Setup in 10minutes</span>
        </p>
      </div>
      <div className={style.tiltWrapper}>
        <div
          className={style.tiltInner}
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <TiltImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
