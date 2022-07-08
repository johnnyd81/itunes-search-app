import React from 'react'
import '../App.css'
//the FavouriteItem component is imported to provide a template for the favourite items
import FavouriteItem from './FavouriteItem'

const Favourites = ({ favourites, getFavourites, homeUI }) => {
  return (
    <div className="favourites">
      <div className="favContainer">
        <h1 className="favHeader">Favourites</h1>
        <button className="backButton" onClick={homeUI}>
          Back to Homepage
        </button>
        <div className="favResults">
          {/*if the favourites variable is not undefined then the favourite items stored in favourites will be rendered */}
          {favourites !== undefined ? (
            <div className="favItems">
              {/*by using the map method each item is rendered using FavouriteItem as a template */}
              {favourites &&
                favourites.map((item, index) => (
                  <FavouriteItem
                    item={item}
                    key={index}
                    getFavourites={getFavourites}
                  />
                ))}
            </div>
          ) : (
            <div className="noResults">
              {/*if the favourite variable is undefined then the text below will be rendered */}
              <p className="noFavs">Your Favourite list is currently empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Favourites
