import withFormSubmit from "./withFormSubmit";
import withLogger from "./withLogger";

const enhanceRegistration = (WrappedComponent) =>
  withLogger(withFormSubmit(WrappedComponent));

export default enhanceRegistration;
