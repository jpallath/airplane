import React, { Component } from 'react';

class ArticleItem extends Component{
  render(){
    const { title, content, id } = this.props;
    const link = `/article/${id}`
    return(
      <div>
        <a href={link}>{title}</a>
      </div>
    )
  }
}

export default ArticleItem;
