import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArticleItem extends Component {
  render() {
    const { title, content, id } = this.props;
    const link = `/article/${id}`;
    return (
      <div>
        <Link to={link}>{title}</Link>
      </div>
    );
  }
}

export default ArticleItem;
