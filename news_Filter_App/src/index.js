import React from "react"; //import every single time
import ReactDOM from "react-dom"; // to communicate with the html doc

import Header from "./components/header";

import "./styles/style.css"; // getting styles.css from styles folder
import JSON from "./db.json";
import NewsList from "./components/news_list";
import Footer from "./components/footer";
//classes or functions are called components

//this is a component
//i must always return something
class App extends React.Component {
  state = {
    news: JSON,
    filtered:[],
    footerText: "I am a happy footer",
  };

  getKeywords = (event) => {
    
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1;
    });
    console.log(filtered)

    this.setState(
      {filtered}
    )
  }

  render() {
    const { news, filtered } = this.state;
    console.log(JSON);

    return (
      <>
        <Header 
        keywords = {this.getKeywords} />
        <NewsList news={filtered}>
          <br />
          <h1>I am a children</h1>
        </NewsList>
        <Footer footerText={this.state.footerText}>
          <h1>I am a children of this footer component</h1>
        </Footer>
      </>
    );
  }
}

//RenderDom sends content to index.html
ReactDOM.render(<App />, document.getElementById("root"));
