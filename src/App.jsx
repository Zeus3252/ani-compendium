import { useState } from "react";
import NavBar from "./compontents/NavBar";
import ItemDisplay from "./compontents/ItemDisplay";
import Compare from "./compontents/Compare";
import "./App.css";

function App() {
  const [searchString, setSearchString] = useState("");
  const [animeResults, setAnimeResults] = useState([]);
  const [quote, setQuote] = useState("");
  const [compareModal, setCompareModal] = useState(false);
  const [compare, setCompare] = useState([
    {
      url: "",
      image: "",
      synopsis: "",
    },
  ]);

  function searchTime() {
    const getData = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchString}`
      );
      const result = await response.json();
      setAnimeResults(result.data);
    };
    getData();

    const getData2 = async () => {
      const response = await fetch(
        `https://animechan.xyz/api/quotes/anime?title=${searchString}`
      );
      const result = await response.json();
      setQuote(result.quote);
    };
    getData2();
  }

  function addToCompare(newUrl, newImage, newSynopsis) {
    if (compare.length === 1 && compare[0].url === "") {
      setCompare([{ url: newUrl, image: newImage, synopsis: newSynopsis }]);
    } else if (
      !compare.find((item) => item.url === newUrl) &&
      compare.length < 2
    ) {
      setCompare((prevState) => [
        ...prevState,
        { url: newUrl, image: newImage, synopsis: newSynopsis },
      ]);
    }
  }

  function removeFromCompare (newUrl) {
    for(let item of compare) {
      if(item.url === newUrl) {
        setCompare(prevState => prevState.filter(item => item.url != newUrl))
      }
    }
  }

  const toggleCompareModal = () => {
    setCompareModal(!compareModal);
  };

  return (
    <div>
      <Compare
        addToCompare={addToCompare}
        compare={compare}
        setCompare={setCompare}
        compareModal={compareModal}
        removeFromCompare={removeFromCompare}
      />
      <NavBar
        quote={quote}
        setCompareModal={setCompareModal}
        compareModal={compareModal}
        toggleCompareModal={toggleCompareModal}
      />
      <ItemDisplay
        animeResults={animeResults}
        searchTime={searchTime}
        searchString={searchString}
        setSearchString={setSearchString}
        addToCompare={addToCompare}
      />
    </div>
  );
}

export default App;
