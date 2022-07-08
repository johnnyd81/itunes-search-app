import React from 'react'
import SearchItem from './SearchItem'
import '../App.css'

//this component renders the search results from the iTunes api
const SearchResults = ({ apiData, favourites, getFavourites }) => {
  //the first condition in the if statement checks that data exists, if so then it renders
  if (apiData.results !== undefined && apiData.resultCount !== 0) {
    return (
      <div className="apiResults">
        {/*I imported the searchItem component to provide a template for the search results */}
        {/*if the apiData.results are available then the results can be rendered using the map method */}
        {apiData.results &&
          apiData.results.map((item, index) => {
            return (
              <SearchItem
                item={item}
                key={index}
                favourites={favourites}
                getFavourites={getFavourites}
              />
            )
          })}
      </div>
    ) //if no data is defined then the welcome message is rendered
  } else if (apiData.results === undefined) {
    return (
      <div className="intro">
        <p className="introText">
          Welcome User, to begin type in a search term and click search
        </p>
      </div>
    )
  } else {
    return (
      //if no data can be found for a search then the message below is shown
      <div className="error">
        <p className="errorMessage">There are no results to display</p>
      </div>
    )
  }
}

export default SearchResults
