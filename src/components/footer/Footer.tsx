import { Globe } from "lucide-react";
import style from "./Footer.module.scss";
import Linkedin from "../common/svg/Linkedin";
import Youtube from "../common/svg/Youtube";
import Twitter from "../common/svg/Twitter";
const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.left}>
        {/* <div className={style.logo}>

        </div> */}
        <div className={style.products}>
          <div>Product</div>
          <div>Home</div>
          <div>Support</div>
          <div>Pricing</div>
          <div>Affiliate</div>
        </div>
        <div className={style.resources}>
          <div>Resources</div>
          <div>Company</div>
          <div>Blogs</div>
          <div>Community</div>
          <div>Careeres</div>
          <div>About</div>
        </div>
        <div className={style.legal}>
          <div>Legal</div>
          <div>Privacy</div>
          <div>Terms</div>
        </div>
      </div>
      <div className={style.right}>
        <div>
          Making every customer feel valued—no matter the size of your audience.
        </div>
        <div className={style.icons}>
          <Globe size={38} />
          <Linkedin size={38} />
          <Twitter size={38} />
          <Youtube size={38} />
        </div>
        <p>&copy; 2026 Thumblify</p>
      </div>
    </div>
  );
};

export default Footer;
