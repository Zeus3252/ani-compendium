import { Button } from "@chakra-ui/react";

function NavBar({ quote, navQuote, toggleCompareModal }) {
  return (
    <div>
      <Button onClick={toggleCompareModal}>Compare</Button>
      <p>{quote}</p>
    </div>
  );
}

export default NavBar;
