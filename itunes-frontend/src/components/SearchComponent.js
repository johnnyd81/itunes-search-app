import React from 'react'
import '../App.css'

//this component contains the searchbar input, dropdown-menu, search button and a button link to the favourites page
const SearchComponent = ({
  term, //using destructuring the props can be used as a single term
  handleTermInput, //the handleTermInput and handleTypeChange functions handle changes in the input and dropdown-menu
  handleTypeChange,
  type,
  handleClick,
  favouriteUI, //the favouriteUI function is used to switch the user interface by assigning it to the favourites button
}) => {
  return (
    <div className="searchBar">
      {/*any changes in the input field will trigger the prop handleTermInput function*/}
      <input
        className="inputField"
        type="text"
        placeholder="Type search terms here..."
        value={term}
        onChange={handleTermInput}
      />
      {/*the changes in the dropdown-menu is tracked using the prop handleTypeChange function */}
      <select
        className="dropdown"
        onChange={handleTypeChange}
        name="type"
        value={type}
      >
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="music">Music</option>
        <option value="ebook">Ebook</option>
        <option value="shortFilm">Short Film</option>
        <option value="audiobook">Audiobook</option>
        <option value="podcast">Podcast</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
      </select>
      {/*when a user clicks on the search button then data is fetched from the iTunes api */}
      <button className="searchButton" onClick={handleClick}>
        Search
      </button>
      {/*the onclick event below takes a user to the favourite page */}
      <button className="favouriteButton" onClick={favouriteUI}>
        Favourites
      </button>
    </div>
  )
}

export default SearchComponent
