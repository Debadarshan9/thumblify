import { ArrowRight, Mail, UserIcon } from "lucide-react";
import Header from "../common/header/Header";
import TextFieldComponent from "../common/input/text/Text";
import style from "./Contact.module.scss";
const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <Header
        headerName="Contact"
        headerTitle="Reach out to us"
        headerSubtitle="Ready to grow your brand? Let's connect and build something exceptional together."
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
        <button className={style.submitBtn}>
          Submit <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
