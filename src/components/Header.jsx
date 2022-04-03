import PropTypes from "prop-types";

function Header(props) {
  return (
    <header style={props.style}>
      <div className="container">
        <h1>{props.text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Hello World",
  style: {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#ff6a95",
  },
};
Header.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
export default Header;
