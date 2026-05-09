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
        headerTitle="What you get"
        headerSubtitle="Components, patterns and pages — everything you need to ship."
      />
      <div className={style.featureCards}>
        {featureData.map((card) => (
          <Card
            key={card.icon}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
      {/* 2nd part */}
      <div className={style.featureContainer}>
        <div className={style.featureDescription}>
          PrebuiltUI helps you build faster by transforming your design vision
          into fully functional, production-ready UI components.
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
                Better design with highest revenue and profits
              </span>
              <span className={style.featureSubtitle}>
                PrebuiltUI empowers you to build beautifully and scale
                effortlessly.
              </span>
              <span className={style.featureLink}>
                Learn more about the product Testimonials <ArrowUpRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
