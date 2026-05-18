import Header from "../common/header/Header";
import PriceCard from "./price-card/PriceCard";
import { PricingData } from "./Pricing.data";
import style from "./Pricing.module.scss";
const Pricing = () => {
  return (
    <div className={style.pricingContainer}>
      <Header
        headerName="Pricing"
        headerTitle="Simple pricing"
        headerSubtitle="Choose the plan that fits your creation schedule, Cancel anytime."
      />
      <div className={style.priceCards}>
        {PricingData.map((data, index) => (
          <PriceCard
            key={index}
            planName={data.planName}
            price={data.price}
            access={data.access}
            isPopular={data.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
