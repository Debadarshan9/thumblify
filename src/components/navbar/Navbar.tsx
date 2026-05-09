import style from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className={style.navContainer}>
      <div className={style.left}>
        <span className={style.logo}>
          <img src={logo} height={40} alt="Thumblify Logo" />
        </span>
        <span className={style.title}>Thumblify</span>
      </div>
      <div className={style.middle}>
        <ul className={style.navLinks}>
          <li>Home</li>
          <li>Generate</li>
          <li>my Generation</li>
          <li>My Contact</li>
        </ul>
      </div>
      <div className={style.right}>
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
