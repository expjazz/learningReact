import React, { Component } from "react";
import * as movies from "../fakeMovieService";
import Table from "./Table";
import Pagination from "./common/Pagination";
export default class Movies extends Component {
  state = {
    movies: movies.addLikesToMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  handleLike = (movieP) => {
    const newMovies = this.state.movies.map((movie) => {
      if (movie === movieP) {
        movie.liked = !movie.liked;
        return movie;
      } else {
        return movie;
      }
    });
    this.setState({
      movies: newMovies,
    });
  };

  handlePageChange = (page) => {
    console.log(page);
  };
  removeMovie = (id) => {
    const newMovies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({
      movies: newMovies,
    });
  };
  render() {
    return (
      <div className="container">
        {this.state.movies.length > 0 ? (
          <Table
            movies={this.state}
            currentPage={this.state.currentPage}
            removeMovie={this.removeMovie}
            onLike={this.handleLike}
          />
        ) : (
          "The table is empty"
        )}
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
