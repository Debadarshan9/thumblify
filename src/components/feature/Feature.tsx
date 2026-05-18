import Card from "./card/Card";
import { featureData } from "./Feature.data";
import style from "./Feature.module.scss";
import featureShowcase1 from "../../assets/feature-showcase-1.jpg";
import featureShowcase2 from "../../assets/feature-showcase-2.png";
import Header from "../common/header/Header";
import { ArrowUpRight } from "lucide-react";
const Feature = () => {
  return (
    <div className={style.featureSection}>
      <Header
        headerName="Feature"
        headerTitle="Why use our generator?"
        headerSubtitle="Create stunning thumbnails that drive clicks without the hassle."
      />
      <div className={style.featureCards}>
        {featureData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
      {/* 2nd part */}
      <div className={style.featureContainer}>
        <div className={style.featureDescription}>
          Our AI understands what makes a video go viral and designs thumbnails
          accordingly
        </div>
        <div className={style.featureContent}>
          <div className={style.left}>
            <figure>
              <img src={featureShowcase1} alt="" />
            </figure>
          </div>
          <div className={style.right}>
            <figure>
              <img src={featureShowcase2} alt="" />
            </figure>
            <div className={style.rightDesc}>
              <span className={style.featureText}>
                Boost your views with AI-optimized designs
              </span>
              <span className={style.featureSubtitle}>
                Stop guessing and start ranking. Our AI creates design proven to
                capture attention.
              </span>
              <span className={style.featureLink}>
                Start generating free <ArrowUpRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
