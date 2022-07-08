import React from 'react'
import '../App.css'
import axios from 'axios' //I used axios to make my post requests

const SearchItem = ({ item, getFavourites }) => {
  //the function below triggers each time a favourite item is selected
  const addFavourite = () => {
    //the post request is made to the backend that adds the new favourite item to the backend favourites array
    axios
      .post('/api/addItem', {
        newItem: item,
      })
      .catch((error) => console.log('Error :', error))
    /*the function below gets the data from the backend favourites array 
      and adds it to the frontend favourites state variable*/
    getFavourites()
  }

  //the function below handles the onclick event and also notifies the user that an item has been selected
  const handleAdd = (event) => {
    event.preventDefault()
    addFavourite()
    alert('Favourite added')
  }

  /*of the returned search data the image, trackname, artistname, kind and wrappertype are displayed*/
  return (
    <div className="searchItem">
      <div className="image"></div>
      {item.artworkUrl100 ? (
        <img src={item.artworkUrl100} alt="media illustration" />
      ) : (
        <p className="text">No image available</p>
      )}
      <div className="itemInfo">
        {item.trackName ? (
          <div className="trackname">
            <span>Title: </span> {item.trackName}
          </div>
        ) : (
          <div className="collectionname">
            <span>Title:</span> {item.collectionName}
          </div>
        )}
        <div className="artistname">
          <span>Artist:</span> {item.artistName}
        </div>
        {item.kind ? (
          <div className="kind">
            <span>Type:</span> {item.kind}
          </div>
        ) : (
          <div className="wrappertype">
            <span>Type:</span> {item.wrapperType}
          </div>
        )}
      </div>
      <div className="button">
        <button className="addFav" onClick={handleAdd}>
          Add to Favourites
        </button>
      </div>
    </div>
  )
}

export default SearchItem
