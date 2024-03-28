import { useState } from "react";
import { Button } from "@chakra-ui/react";
import Compare from "./Compare";
function NavBar({ quote, navQuote, toggleCompareModal }) {
  return (
    <div>
      <Button onClick={toggleCompareModal}>Compare</Button>
      <p>{quote}</p>
    </div>
  );
}

export default NavBar;
