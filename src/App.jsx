import { useEffect, useState } from 'react'
import NavBar from './compontents/NavBar'
import ItemDisplay from './compontents/ItemDisplay'
import './App.css'

function App() {
  const [searchString, setSearchString] = useState("")
  const [animeResults, setAnimeResults] = useState([])
  const [quote, setQuote] = useState("")

  function searchTime() {
    const getData = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchString}`);
      const result = await response.json();
      setAnimeResults(result.data);
    };
    getData(); 

    const getData2 = async () => {
      const response = await fetch(`https://animechan.xyz/api/quotes/anime?title=${searchString}`);
      const result = await response.json();
      setQuote(result.quote);
    };
    getData2();
  }
  
  
  return (
   
      <div>
        <NavBar
        quote={quote}
        />
        <ItemDisplay 
        animeResults={animeResults}
        searchTime={searchTime}
        searchString={searchString}
        setSearchString={setSearchString}
        />
       
      </div> 
  )
}

export default App;
