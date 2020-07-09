import React from 'react'

export default function ListGroup(props) {
  const { genres, onCurrentGenre, currentGenre }= props;
  return (
    <div>
      <ul class="list-group">
        {genres.map((genre, index) => (
          <li className={currentGenre === genre.name ? 'list-group-item active' : 'list-group-item'} 
          key={genre.id} 

          onClick={()=> {onCurrentGenre(genre.name)}}
          > {genre.name} </li>
        ))}
      </ul>
    </div>
  )
}

