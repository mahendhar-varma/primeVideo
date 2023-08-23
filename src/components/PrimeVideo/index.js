import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    item => item.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    item => item.categoryId === 'COMEDY',
  )

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div>
        <h1 className="title">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
      </div>
      <div>
        <h1 className="title">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
