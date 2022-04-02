import PropTypes from "prop-types";

function Header(props) {
  return <h1>{props.text}</h1>;
}

Header.defaultProps = {
  text: "Hello World",
};
Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
