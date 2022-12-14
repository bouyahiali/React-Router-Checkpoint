import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

const MovieCard = ({ el }) => {
  return (

    <Link to={`/movies/${el._id}`}>
      <div className="card">
        <img src={el.ImageURL} alt="" />
        <StarRatings
          rating={el.Rating}
          // changeRating={}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension='30px'
        />
      </div>
    </Link>

  )
}

export default MovieCard