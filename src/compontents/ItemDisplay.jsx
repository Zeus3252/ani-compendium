import { Button, Input, Image, Link, Flex, Box } from "@chakra-ui/react";

function ItemDisplay({
  animeResults,
  searchTime,
  setSearchString,
  addToCompare,
  setCompareModal
}) {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchString(e.target.value)}
      ></Input>
      <Button colorScheme="blue" onClick={searchTime}>
        Search
      </Button>
      {animeResults &&
        animeResults.map((item) => (
          <Flex alignItems="flex-start" my="4">
            <Link href={item.url} flexShrink={0}>
              <Image
                src={item.images.jpg.image_url}
                alt="Anime"
                width="full"
                height="auto"
              />
            </Link>
            <Box ml="2" overflow="hidden">
              {item.synopsis}
              <Box>
            <Button
              onClick={() => {
                addToCompare(
                  item.url,
                  item.images.jpg.image_url,
                  item.synopsis
                );
                setCompareModal(true);
              }}
            >
              Add To Compare
            </Button>
            </Box>
            </Box> 
            
          </Flex>
        ))}
    </div>
  );
}

export default ItemDisplay;
