import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data

  return (
    <li className="list-item">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
        className="popup-content"
      >
        {close => (
          <>
            <div className="popup-items-container">
              <div data-testid="closeButton">
                <IoMdClose className="icon" onClick={() => close()} />
              </div>
              <ReactPlayer
                url={videoUrl}
                controls
                className="player"
                width={500}
              />
            </div>
          </>
        )}
      </Popup>
    </li>
  )
}
export default MovieItem
