import React from "react";

const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log("Component did mount");
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogger;
