import React, { Component } from "react";
class ArticleView extends Component {
  render() {
    let { id } = this.props.match.params;
    id = Number(id);
    let Article = this.props.articles.filter(matcher => matcher.id === id);
    let { title, content } = Article[0];
    return (
      <div className="container">
        <div>
          {title} {content}
        </div>
      </div>
    );
  }
}

export default ArticleView;
