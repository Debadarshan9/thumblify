import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import style from "./Layout.module.scss";
const Layout = () => {
  return (
    <div className={style.layoutContainer}>
      <Navbar />
      <main className={style.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
