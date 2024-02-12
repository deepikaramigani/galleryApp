// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {item, ChangeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = item
  const OnClick = () => {
    ChangeImage(id)
  }

  const imageClassName = isActive ? 'thumbnail-active' : 'thumbnail-inactive'
  return (
    <li className="list-style">
      <button type="button" className="button" onClick={OnClick}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imageClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
