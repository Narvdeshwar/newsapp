import Newsitem from "./Newsitem";
import React, { Component } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import API_KEY from "./Api";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.String,
    pageSize: PropTypes.number,
    category: PropTypes.String,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async updateNews() {
    console.log("componnent did mount");
    this.setState({ loading: true });
    let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${API_KEY}&page=${this.page}&pageSize=${this.props.pageSize}`;
    console.log(URL);
    let data = await fetch(URL);
    let res = await data.json();
    this.setState({
      articles: res.articles,
      totalResults: res.totalResults,
      loading: false,
    });
    console.log(res);
  }
  async componentDidMount() {
    this.updateNews();
  }
  // handle previous action
  handlePrev = async () => {
    console.log("handleprev");
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  // handle next
  handleNext = async () => {
    console.log("handleNext");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="container my-5">
        <h1 className="shadow-lg p-4 rounded text-center">
          SuperNews - Top Headlines of today !
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            articles?.map((e, index) => {
              return (
                <div className="col-sm-4  my-3" key={index}>
                  <Newsitem
                    title={e.title}
                    description={e.description}
                    imgUrl={e.urlToImage}
                    url={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
