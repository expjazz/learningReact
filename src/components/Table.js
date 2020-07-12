import React, { Component } from "react";
import Like from './Like';
import TableHeader from './common/TableHeader'

export default class Table extends Component {
  columns = [
    { },
    { path: 'title', label: 'Title'},
    { path: 'genre.name', label: 'Genre'},
    { path: 'numberInStock', label: 'Stock'},
    { },
    { },

  ]

  render() {
  return (
    <table className="table">
     <TableHeader columns={this.columns} sortColumn={this.props.sortColumn} onSort={this.props.onSort}/>
  
  <tbody>
    {this.props.movies.map((movie) => {
      return (
        <tr key={movie._id}>
                  <th scope="row"></th>

        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>

        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td> <Like movie={movie} onLike={this.props.onLike}/> </td>
        <button className="btn btn-danger" onClick={() => this.props.removeMovie(movie._id)}>Remove</button>
      </tr>
      )
    })}

  </tbody>
</table>
  )}
}
