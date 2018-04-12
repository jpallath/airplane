import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import ArticleMaker from "./components/ArticleMaker";
import ArticleView from "./components/ArticleView";
import Header from "./components/Header";
import Layer from "./components/Layer";
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
            "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ",
          picture:
            "https://www.namibian.com.na/public/uploads/images/5a85a370846c2/Marvel.jpg"
        },
        {
          id: 1,
          title: "Spider-Man",
          content:
            "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit..",
          picture:
            "https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fe772d29f279be5980fe05aedffe585b1%2F205385868%2FSpider-Man%2B%2BHomecoming%2BVR%2BKey%2BArt%2Bcopy.jpg&client=cbc79c14efcebee57402&signature=af9c37d53dea5c0ede89af4f12c6337581cdc947"
        },
        {
          id: 2,
          title: "Hulk",
          content:
            "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.",
          picture:
            "https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F07%2FHulk.jpg"
        },
        {
          id: 3,
          title: "Captain America",
          content:
            "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ",
          picture:
            "https://cdn.movieweb.com/img.news.tops/NE6ul2CzvPn298_1_b/Captain-America-4-Chris-Evans-Returning.jpg"
        },
        {
          id: 4,
          title: "Iron Man",
          content:
            "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit..",
          picture:
            "https://www.sideshowtoy.com/assets/products/400310-iron-man-mark-iii/lg/marvel-iron-man-mark-3-life-size-figure-400310-03.jpg"
        },
        {
          id: 5,
          title: "Thor",
          content:
            "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.",
          picture:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/11/03/104819285-thor.530x298.jpg?v=1509730606"
        }
      ],
      nextArticleId: 6
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
          <Layer />
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
