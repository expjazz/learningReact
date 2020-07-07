import React, { Component } from 'react'
import * as movies from '../fakeMovieService'
import Table from './Table'
export default class Movies extends Component {
  state = {
    movies: movies.getMovies()
  }

  removeMovie = (id) => {
    const newMovies = this.state.movies.filter((movie) => movie._id !== id)
    this.setState({
      movies: newMovies}
    )
  }
  render() {
    console.log(this.state)
    return (
      <div className='container'>
        {this.state.movies.length > 0 ? <Table movies={this.state} removeMovie={this.removeMovie} /> : 'The table is empty'}
        
      </div>
    )
  }
}
