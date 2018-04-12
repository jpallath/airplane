import React, { Component } from "react";
import { Link } from "react-router-dom";

class Layer extends Component {
  render() {
    return (
      <div className="add-layer">
        <Link to="/create" className="btn btn-primary">
          <i className="fas fa-plus" />
        </Link>
      </div>
    );
  }
}

export default Layer;
