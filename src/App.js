import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import ArticleMaker from "./components/ArticleMaker";
import ArticleView from "./components/ArticleView";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 0,
          title: "Marvel Cinematic Universe",
          content:
            "There’s quite a lot I can about this situation, but I’ll keep my mouth shut.  A lot has happened and it’s made this hard to really understand.  I decided I’ll just eat the food and swallow each and every morsel with indifference.  But, who knows.  Maybe I’ll like it."
        },
        {
          id: 1,
          title: "Spider-Man",
          content:
            "He got bitten by a spider, and since then he's decided to be a superhero.  He tends to be seen as the front man of the Marvel Comic universe.  It looks like eventually he'll be front and center in the Marvel Cinematic Universe. But, again, you don't really know where this will go."
        },
        {
          id: 2,
          title: "Hulk",
          content:
            "He's really big and always so angry.  Honestly, I don't know what to do with him.  I think I should give him a chance but I think I prefer to maintain my prejudice over this thing.  He's probably killed a few people, so that makes him a sinner.  What do I know though? He might be the hero"
        }
      ],
      nextArticleId: 3
    };
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(article) {
    this.setState((prevState, props) => {
      const newArticle = { ...article, id: this.state.nextArticleId };
      return {
        nextArticleId: prevState.nextArticleId + 1,
        articles: [...this.state.articles, newArticle]
      };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <ArticleList {...props} articles={this.state.articles} />
            )}
          />
          <Route
            exact
            path="/article/:id"
            render={props => (
              <ArticleView {...props} articles={this.state.articles} />
            )}
          />
          <Route
            path="/create"
            render={props => (
              <ArticleMaker
                {...props}
                articles={this.state.articles}
                onSave={this.handleSave}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
