import React from 'react'
import Like from './Like'
export default function Table(props) {
  const keys = Object.keys(props.movies[0]);
  const { onSort } = props;
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th onClick={()=> {onSort('title')}}> Title </th>
      <th onClick={()=> {onSort('genre.name')}}> Genre </th>
      <th onClick={()=> {onSort('numberInStock')}}> Stock </th>
      <th onClick={()=> {onSort('dailyRentalRate')}}> Rate </th>


    </tr>
  </thead>
  <tbody>
    {props.movies.map((movie) => {
      return (
        <tr key={movie._id}>
                  <th scope="row"></th>

        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>

        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td> <Like movie={movie} onLike={props.onLike}/> </td>
        <button className="btn btn-danger" onClick={() => props.removeMovie(movie._id)}>Remove</button>
      </tr>
      )
    })}

  </tbody>
</table>
  )
}
