// Login.js
import React from "react";
import hands from "assets/img/hands.png";
import Action from "components/Action/Action";
import LoginStyled from "./Login.styled";
import withLoginHandler from "./withLoginHandler"; // Import the HOC

class Login extends React.Component {
  render() {
    const { emailRef, passwordRef, handleSubmit } = this.props;

    return (
      <LoginStyled>
        <div className="main-pic">
          <img alt="" src={hands} />
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p>To continue using our platform, you need to login an account.</p>

          <div className="form__main">
            <div className="form__main-info">
              <p>Email</p>
              <input
                type="text"
                name="email"
                placeholder="email"
                ref={emailRef}
              />
            </div>

            <div className="form__main-info">
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder="password"
                ref={passwordRef}
              />
            </div>
          </div>

          <span>Forgot password?</span>
          <Action nextAction="Registration" action="LOGIN" width={"248px"} />
        </form>
      </LoginStyled>
    );
  }
}

export default withLoginHandler(Login);
