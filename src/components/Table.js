import React, { Component } from "react";
import Like from './Like';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody'

export default class Table extends Component {
  columns = [
    { },
    { path: 'title', label: 'Title'},
    { path: 'genre.name', label: 'Genre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},

    { key: Like, content: movie => <Like movie={movie} onLike={this.props.onLike}/> },
    { content: movie => <button className="btn btn-danger" onClick={() => this.props.removeMovie(movie._id)}>Remove</button>
  },

  ]

  render() {
  return (
    <table className="table">
     <TableHeader columns={this.columns} sortColumn={this.props.sortColumn} onSort={this.props.onSort}/>
     <TableBody data={this.props.movies} columns={this.columns}/>

</table>
  )}
}
