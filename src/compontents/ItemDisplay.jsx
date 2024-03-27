import { useState } from "react";



function ItemDisplay ({ animeResults, searchTime, setSearchString }) {
    return (
    <div>
      <input type="text" placeholder="Search" onChange={(e) => setSearchString(e.target.value)} />
      <button onClick={searchTime}>Search</button>
      {animeResults && animeResults.map((item) => (
        <div className="item-container">
        <a href={item.url}><img src={item.images.jpg.image_url} alt="Anime"/></a>
        {item.synopsis}<br/><br/>
        </div>
      ))}
    </div> 
  );
}


export default ItemDisplay;