import React from 'react'
import '../App.css'

const FavouriteItem = ({ item, getFavourites }) => {
  //the function below deletes an item in the backend favourites array if the item.id matches the specified item
  const deleteFavourite = async () => {
    await fetch(`/api/delete/${item.id}`, {
      method: 'DELETE',
    })
    getFavourites()
  }

  //this function is called when the delete button is clicked
  const handleDelete = (event) => {
    event.preventDefault()
    deleteFavourite()
  }

  //of the data received the image, trackname, artistname, kind and wrappername are used
  return (
    <div className="favouriteItem">
      <div className="image"></div>
      {item.newItem.artworkUrl100 ? (
        <img src={item.newItem.artworkUrl100} alt="media illustration" />
      ) : (
        <p className="text">No image available</p>
      )}
      <div className="itemInfo">
        {item.newItem.trackName ? (
          <div className="trackname">
            <span>Title: </span> {item.newItem.trackName}
          </div>
        ) : (
          <div className="collectionname">
            <span>Title:</span> {item.newItem.collectionName}
          </div>
        )}
        <div className="artistname">
          <span>Artist:</span> {item.newItem.artistName}
        </div>
        {item.newItem.kind ? (
          <div className="kind">
            <span>Type:</span> {item.newItem.kind}
          </div>
        ) : (
          <div className="wrappertype">
            <span>Type:</span> {item.newItem.wrapperType}
          </div>
        )}
      </div>
      <div className="buttonContainer">
        <button className="deleteButton" onClick={handleDelete}>
          Delete Favourite
        </button>
      </div>
    </div>
  )
}

export default FavouriteItem
