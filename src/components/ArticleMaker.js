import React, { Component } from "react";

class ArticleMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({ ...this.state });
    this.setState({
      title: "",
      content: ""
    });
  }
  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          input="text"
          autoComplete="off"
          id="title"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label>Content</label>
        <textarea
          rows="4"
          cols="50"
          name="content"
          id="content"
          type="text"
          autoComplete="off"
          value={content}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ArticleMaker;
