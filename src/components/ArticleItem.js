import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArticleItem extends Component {
  render() {
    const { title, content, id, picture } = this.props;
    const link = `/article/${id}`;
    return (
      <div className="article-item">
        <Link to={link}>
          <div>
            <img src={picture} />
            <h2>{title}</h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArticleItem;
