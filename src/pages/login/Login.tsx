import { useState } from "react";
import TextFieldComponent from "../../components/common/input/text/Text";
import style from "./Login.module.scss";
import { motion } from "motion/react";
import { Lock, Mail, UserIcon } from "lucide-react";
import Button from "../../components/common/button/Button";
import { AuthState } from "../../utils/enum";
const Login = () => {
  const [state, setState] = useState<AuthState>(AuthState.LOGIN);

  const handleClick = () => {
    setState(state === AuthState.LOGIN ? AuthState.SIGNUP : AuthState.LOGIN);
  };
  return (
    <div className={style.loginContainer}>
      <motion.form
        layout
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={style.formContainer}
      >
        <h2>{state === AuthState.LOGIN ? "Login" : "Sign Up"}</h2>
        <p>Please sign in to continue</p>
        {state === AuthState.SIGNUP && (
          <div className={style.inputWrapper}>
            <TextFieldComponent
              type="text"
              label=""
              placeholder="Name"
              icon={UserIcon}
            />
          </div>
        )}
        <div className={style.inputWrapper}>
          <TextFieldComponent
            type="text"
            label=""
            placeholder={state === AuthState.LOGIN ? "UserName" : "Email"}
            icon={state === AuthState.LOGIN ? UserIcon : Mail}
          />
        </div>
        <div className={style.inputWrapper}>
          <TextFieldComponent
            type="password"
            label=""
            placeholder="Password"
            icon={Lock}
          />
        </div>
        <span className={style.clickHere}>Forgot password?</span>
        <Button
          fullWidth
          text={state === AuthState.LOGIN ? "Login" : "Sign Up"}
          variant="contained"
        />
        <p>
          {state === AuthState.LOGIN
            ? "Don't have an account? "
            : "Already have an account? "}
          <span className={style.clickHere} onClick={() => handleClick()}>
            click here
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
