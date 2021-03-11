import React, { useRef } from "react";
import "../styles/Login.scss";
import { useDatalayerValue } from "../Datalayer";

function Login() {
  const [{}, dispatch] = useDatalayerValue();
  const inputEmail = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputEmail.current.value === "") {
      alert("wirte a name");
    } else {
      dispatch({
        type: "USER_LOGIN",
        user_login: true,
      });
      dispatch({
        type: "USER_EMAIL",
        user_email: inputEmail.current.value,
      });
    }
  };

  return (
    <div className="login">
      <h1>
        Unlimited movies, TV <br /> shows, and more.
      </h1>
      <br />
      <h3>Watch anyhwere. Cancel anytime</h3>
      <br />
      <h4>
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <br />
      <form>
        <input
          className="login__input"
          ref={inputEmail}
          placeholder="Email adress or just a Name"
        />
        <button type="submit" onClick={submitHandler}>
          Get Started
        </button>
      </form>
    </div>
  );
}

export default Login;
