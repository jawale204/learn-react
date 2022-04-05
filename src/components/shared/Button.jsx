import PropTypes from "prop-types";
function Button({ version, isDisabled, children, type }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "secondary",
  isDisabled: false,
  type: "button",
};

Button.prototypes = {
  version: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;
