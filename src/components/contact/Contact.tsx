import { ArrowRight, Mail, UserIcon } from "lucide-react";
import Header from "../common/header/Header";
import TextFieldComponent from "../common/input/text/Text";
import style from "./Contact.module.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "../common/button/Button";
const Contact = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <div className={style.contactContainer} id="contact">
      <Header
        headerName="Contact"
        headerTitle="Grow your channel"
        headerSubtitle="Have questions about our AI? Ready to scale your views? Let's talk."
      />
      <div className={style.formContainer}>
        <div className={style.inputWrapper}>
          <div className={style.input}>
            <TextFieldComponent
              type="text"
              label="Your Name"
              placeholder="Enter your name"
              icon={UserIcon}
            />
          </div>
          <div className={style.input}>
            <TextFieldComponent
              type="email"
              label="Your Email"
              placeholder="Enter your email"
              icon={Mail}
            />
          </div>
        </div>
        <TextFieldComponent
          label="Your Message"
          placeholder="Enter your message"
          multiline={8}
        />
        <Button
          text="Submit"
          variant="contained"
          rounded
          endIcon={ArrowRight}
        />
      </div>
    </div>
  );
};

export default Contact;
