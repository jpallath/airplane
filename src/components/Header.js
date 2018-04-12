import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/" className="btn btn-primary">
          / Fan Load /
        </Link>
      </nav>
    );
  }
}

export default Header;
