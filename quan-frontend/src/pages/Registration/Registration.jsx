import React from "react";
import { Link } from "react-router-dom";
import hands from "assets/img/hands.png";
import Action from "components/Action/Action";
import RegistrationStyled from "./Registration.styled";
import enhanceRegistration from "./enhanceRegistration";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, firstname, lastname, password } = this.state;

    return (
      <RegistrationStyled>
        <div className="main-pic">
          <img alt="" src={hands} />
        </div>

        <form className="form" onSubmit={this.props.onSubmit}>
          <h1>Registration form</h1>
          <p>
            To continue using our platform, you need to register an account.
          </p>

          <div className="form__main-info">
            <p>Name</p>
            <input
              type="text"
              name="firstname"
              required
              value={firstname}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form__main-info">
            <p>Email</p>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form__main-info">
            <p>Password</p>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={this.handleInputChange}
            />
          </div>

          <Link to="/forgot-password">
            <span>Forgot password?</span>
          </Link>

          <Action action="REGISTRATION" nextAction="Login" width={"200px"} />
        </form>
      </RegistrationStyled>
    );
  }
}

export default enhanceRegistration(Registration);
