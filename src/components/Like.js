import React from 'react'

export default function Like(props) {
  const { movie, onLike } = props
  return (
    <span onClick={()=> onLike(movie)}>
      {movie.liked ? <i className="fa fa-heart" aria-hidden="true"></i>
 : <i className="fa fa-heart-o" aria-hidden="true"></i> }
    </span>
  )
}
