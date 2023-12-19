import React from "react";

const withLoginHandler = (WrappedComponent) => {
  return class extends React.Component {
    emailRef = React.createRef();
    passwordRef = React.createRef();

    handleSubmit = (event) => {
      event.preventDefault();
      const email = this.emailRef.current.value;
      const password = this.passwordRef.current.value;
      console.log("Login with", email, password);
    };

    render() {
      return (
        <WrappedComponent
          emailRef={this.emailRef}
          passwordRef={this.passwordRef}
          handleSubmit={this.handleSubmit}
          {...this.props}
        />
      );
    }
  };
};

export default withLoginHandler;
