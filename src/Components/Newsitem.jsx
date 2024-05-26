import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, url, author, date, source } = this.props;
    return (
      <div className="card shadow-lg rounded">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
        <img src={imgUrl} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} updated {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
        <a href={url} className="btn btn-primary p-3" target="_blank">
          Read more
        </a>
      </div>
    );
  }
}
