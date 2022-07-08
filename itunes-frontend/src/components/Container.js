import React, { useState } from 'react'
import Header from './Header'
import SearchComponent from './SearchComponent'
import SearchResults from './SearchResults'

//this component renders my search component and the search results
const Container = ({ favourites, getFavourites, favouriteUI }) => {
  const [term, setTerm] = useState('')
  const [type, setType] = useState('all')
  const [dataOutput, setDataOutput] = useState({})

  //the function below handles the user input in my searchbar
  const handleTermInput = (event) => {
    setTerm(event.target.value)
  }

  //the dropdown menu values are assigned using the function below
  const handleTypeChange = (event) => {
    setType(event.target.value)
  }
  /*the handleClick function prevents unnecessary issues by using conditions to regulate proper term input so if the 
 searchbar is empty then the search doesn't proceed*/
  const handleClick = (event) => {
    event.preventDefault()
    if (term === '') {
      alert('Please enter a search term')
    } else if (term.length < 2) {
      alert('The server is currently busy')
    } else {
      searchSubmit() //the searchSubmit function is called if all the conditions above are avoided
    }
  }

  //the function below performs the call to the iTunes api and requests the data
  const searchSubmit = async () => {
    const result = await fetch(`/search/${term}/${type}`)
    const resData = await result.json()
    setDataOutput(resData.response)
  }

  return (
    <div>
      <Header />
      <SearchComponent
        handleTermInput={handleTermInput}
        handleTypeChange={handleTypeChange}
        searchSubmit={searchSubmit}
        term={term}
        type={type}
        handleClick={handleClick}
        favouriteUI={favouriteUI}
      />
      <SearchResults
        apiData={dataOutput}
        favourites={favourites}
        getFavourites={getFavourites}
      />
    </div>
  )
}

export default Container
