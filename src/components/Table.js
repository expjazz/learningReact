import React from 'react'

export default function Table(props) {
  console.log(props.movies)
  const keys = Object.keys(props.movies.movies[0]);
  console.log(keys)
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      {keys.map((key) => {
        return (
        <th scope="col" key={key}>{key}</th>)
        
      })}

    </tr>
  </thead>
  <tbody>
    {props.movies.movies.map((movie) => {
      return (
        <tr key={movie._id}>
                  <th scope="row"></th>

        <td>{movie._id}</td>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>

        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>{movie.publishDate}</td>
        <button className="btn btn-danger" onClick={() => props.removeMovie(movie._id)}>Remove</button>
      </tr>
      )
    })}

  </tbody>
</table>
  )
}
