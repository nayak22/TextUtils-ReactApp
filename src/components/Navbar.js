import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      style={{
        borderBottom: props.mode === "dark" ? "1px solid white" : "none",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.navTitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.navAbout}
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleModeTheme}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
          {/* <form className="d-flex mx-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  navTitle: PropTypes.string.isRequired,
  navAbout: PropTypes.string,
};

// Navbar.defaultProps = {
//   navTitle: "Set the title here",
//   navAbout: "Set the about here",
// };

export default Navbar;
