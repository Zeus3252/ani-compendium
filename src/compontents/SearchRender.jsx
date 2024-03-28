import { useState, useEffect } from "react";
import ItemDisplay from "./ItemDisplay";
import Compare from "./Compare";

function SearchRender() {
  const [searchString, setSearchString] = useState("");
  const [animeResults, setAnimeResults] = useState([]);
  const [quote, setQuote] = useState([]);
  const [compareModal, setCompareModal] = useState(null);
  const [compare, setCompare] = useState([
    {
      url: "",
      image: "",
      synopsis: "",
    },
  ]);
  function addToCompare(newUrl, newImage, newSynopsis, newTitle) {
    if (compare.length === 1) {
      setCompare([
        {
          url: newUrl,
          image: newImage,
          synopsis: newSynopsis,
          title: newTitle,
        },
      ]);
    } else if (
      !compare.find((item) => item.url === newUrl) &&
      compare.length < 2
    ) {
      setCompare((prevState) => [
        ...prevState,
        {
          url: newUrl,
          image: newImage,
          synopsis: newSynopsis,
          title: newTitle,
        },
      ]);
    }
  }

  function removeFromCompare(newUrl) {
    for (let item of compare) {
      if (item.url === newUrl) {
        setCompare((prevState) =>
          prevState.filter((item) => item.url != newUrl)
        );
      }
    }
  }

  const toggleCompareModal = () => {
    
      setCompareModal(!compareModal);
    } 
  

  function searchTime() {
    
    if (searchString != "") {
        setCompare((prevState) =>
          prevState.filter((item) => item.url != "")
        );
      const getData = async () => {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${searchString}`
        );
        const result = await response.json();
        setAnimeResults(result.data);
        setCompareModal(true)
        
      };
      getData();

      const getData2 = async () => {
        const response = await fetch(`https://animechan.xyz/api/random`);
        const result = await response.json();
        setQuote(result);
      };
      getData2();
    }
  }

  useEffect(() => {
    if (compare.length === 0) {
      setCompareModal(false);
    }
  }, [compare]);

  useEffect(() => {
    const getData2 = async () => {
      const response = await fetch(`https://animechan.xyz/api/random`);
      const result = await response.json();
      setQuote(result);
    };
    getData2();
  }, []);
  return (
    <div>
      <Compare
        compare={compare}
        compareModal={compareModal}
        removeFromCompare={removeFromCompare}
        toggleCompareModal={toggleCompareModal}
        setCompare={setCompare}
      />

      <ItemDisplay
        animeResults={animeResults}
        searchTime={searchTime}
        setSearchString={setSearchString}
        addToCompare={addToCompare}
        setCompareModal={setCompareModal}
        quote={quote}
       
      />
    </div>
  );
}

export default SearchRender;
