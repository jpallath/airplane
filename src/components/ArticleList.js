import React, { Component } from "react";
import ArticleItem from "./ArticleItem";

class ArticleList extends Component {
  render() {
    const articles = this.props.articles.map(article => (
      <ArticleItem key={article.id} {...article} />
    ));
    return <div>{articles}</div>;
  }
}

export default ArticleList;
