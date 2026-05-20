import { Check } from "lucide-react";
import { classes } from "../../../utils/utils";
import Pill from "../../common/pill/Pill";
import style from "./PriceCard.module.scss";
import Button from "../../common/button/Button";
type PriceCardProps = {
  planName: string;
  price: number;
  access: string[];
  isPopular?: boolean;
};
const PriceCard = ({
  planName,
  price,
  access,
  isPopular = false,
}: PriceCardProps) => {
  return (
    <div className={classes(style.card, isPopular ? style.popular : "")}>
      {isPopular && (
        <div className={style.pill}>
          <Pill text="Most Popular" overrideCss={style.overrideCss} />
        </div>
      )}
      <div className={style.top}>
        <div className={style.planCategory}>{planName}</div>
        <div className={style.planPrice}>
          <span className={style.highlight}>${price}</span>
          <span>/month</span>
        </div>
      </div>
      <div className={style.middle}>
        {access.map((str, index) => (
          <div key={index} className={style.accessItem}>
            <Check className={style.check} /> {str}
          </div>
        ))}
      </div>
      <div className={style.bottom}>
        <Button
          text="Get Started"
          variant="contained"
          fullWidth
          className={isPopular ? style.popularButton : ""}
        />
      </div>
    </div>
  );
};

export default PriceCard;
