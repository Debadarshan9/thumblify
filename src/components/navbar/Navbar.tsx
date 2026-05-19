import style from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/button/Button";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={style.navContainer}>
      <Link to="/" className={style.left}>
        <span className={style.logo}>
          <img src={logo} height={40} alt="Thumblify Logo" />
        </span>
        <span className={style.title}>Thumblify</span>
      </Link>
      <div className={style.middle}>
        <ul className={style.navLinks}>
          <Link to="/" className={style.link}>
            Home
          </Link>
          <Link to="/generate" className={style.link}>
            Generate
          </Link>
          <Link to="/my-generation" className={style.link}>
            my Generation
          </Link>
          <Link to="/#contact" className={style.link}>
            My Contact
          </Link>
        </ul>
      </div>
      <div className={style.right}>
        <Button
          text="Get Started"
          variant="contained"
          handleClick={() => navigate("/login")}
          rounded
        />
      </div>
    </nav>
  );
};

export default Navbar;
