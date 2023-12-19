// withFormSubmit.js
import React from "react";

const withFormSubmit = (WrappedComponent) => {
  return class extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form submitted");
    };

    render() {
      return <WrappedComponent {...this.props} onSubmit={this.handleSubmit} />;
    }
  };
};

export default withFormSubmit;
