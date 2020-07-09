import React, { Component } from "react";
import * as movies from "../fakeMovieService";
import Table from "./Table";
import Pagination from "./common/Pagination";
import { paginate } from '../utils/paginate'
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
    this.setState({ currentPage: page });
  };
  removeMovie = (id) => {
    const newMovies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({
      movies: newMovies,
    });
  };
  render() {
    const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize)
    return (
      <div className="container">
        {this.state.movies.length > 0 ? (
          <Table
            movies={movies}
            removeMovie={this.removeMovie}
            onLike={this.handleLike}
          />
        ) : (
          "The table is empty"
        )}
        <Pagination
          currentPage={this.state.currentPage}
          itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
