import React, { Component } from "react";
import * as movies from "../fakeMovieService";
import Table from "./Table";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import { getGenres } from '../fakeGenreService';
import _ from 'lodash'

export default class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    currentGenre: 'all',
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres =  [{_id: '', name: 'all'}, ...getGenres()];

    this.setState({movies: movies.addLikesToMovies(), genres})
  }

  handleCurrentGenre = (genre) => {
    this.setState({
      currentGenre: genre,
      currentPage: 1
    })
  }

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

  filterMovies = () => {
    let temp;
    if (this.state.currentGenre === 'all') {
      return this.state.movies 
    } else {
      temp = this.state.movies.filter((movie) => {
        return movie.genre.name === this.state.currentGenre
      })
    };
    console.log(temp);
    return temp
    
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = path => {
    const sortColumn = {...this.state.sortColumn}
    if (sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.setState({ sortColumn })
  }
  removeMovie = (id) => {
    const newMovies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({
      movies: newMovies,
    });
  };
  render() {
    const sorted = _.orderBy(this.filterMovies(), [this.state.sortColumn.path], [this.state.sortColumn.order])
    const movies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="container">
        <div className="row">

        <div className="col-3">
          <ListGroup genres={this.state.genres}
          currentGenre={this.state.currentGenre}
          onCurrentGenre={this.handleCurrentGenre} />
        </div>
        <div className="col-6">
        {this.state.movies.length > 0 ? (
          <Table
          movies={movies}
          removeMovie={this.removeMovie}
          onLike={this.handleLike}
          onSort={this.handleSort}
          />
          ) : (
            "The table is empty"
            )}
            </div>
            </div>
        <Pagination
          currentPage={this.state.currentPage}
          itemsCount={this.filterMovies().length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
