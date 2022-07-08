import React, { useState } from 'react'
import './App.css'
import Container from './components/Container'
import Favourites from './components/Favourites'

function App() {
  //the favourites variable below contains all the items added when the user adds a favourite
  const [favourites, setFavourites] = useState()
  // the user interface is altered by using a boolean value to switch between the homepage and the favourites page
  const [changeUI, setChangeUI] = useState(false)

  /*the function below fetches my favourites array in my express backend and puts that data into my favourites state variable */
  const getFavourites = async () => {
    const res = await fetch('/api')
    const resData = await res.json()
    setFavourites(resData.data)
  }
  //the two functions below alter my user interface by switching between the homepage and the favourites page
  const uiChange1 = () => {
    setChangeUI(true)
  }

  const uiChange2 = () => {
    setChangeUI(false)
  }
  //I used the ternary operator below since only two pages were used and thus only two options
  return (
    <div className="App">
      {/*by using the ternary operator my UI can be altered depending on whether the value is true or false*/}
      {!changeUI ? (
        <Container
          favourites={favourites}
          getFavourites={getFavourites}
          favouriteUI={uiChange1}
        />
      ) : (
        <Favourites
          favourites={favourites}
          getFavourites={getFavourites}
          homeUI={uiChange2}
        />
      )}
    </div>
  )
}

export default App
