const GameItem = props => {
  const {imageDetails, clickImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onSelectImage = () => {
    clickImage(id)
  }

  return (
    <li onClick={onSelectImage}>
      <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}

export default GameItem
