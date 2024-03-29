import {
  Button,
  Input,
  Image,
  Link,
  Flex,
  Box,
  Heading,
  Center,
} from "@chakra-ui/react";

function ItemDisplay({
  animeResults,
  searchTime,
  setSearchString,
  addToCompare,
  setCompareModal,
  quote,
  handleKeyPress,
}) {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyPress}
      ></Input>
      <Center>
        <Button colorScheme="blue" onClick={searchTime}>
          Search
        </Button>
      </Center>
      {animeResults &&
        animeResults.map((item) => (
          <Flex alignItems="flex-start" my="4">
            <Link href={item.url} flexShrink={0} position="relative">
              <Image
                src={item.images.jpg.image_url}
                alt="Anime"
                width="225"
                height="auto"
              />
            </Link>

            <Box ml="2" overflow="hidden">
              <Heading as="h3" size="lg">
                {item.title}
              </Heading>
              <br />
              {item.synopsis}
              <Box>
                <Button
                  onClick={() => {
                    addToCompare(
                      item.url,
                      item.images.jpg.image_url,
                      item.synopsis,
                      item.title
                    );
                    setCompareModal(true);
                  }}
                >
                  Compare
                </Button>
              </Box>
            </Box>
          </Flex>
        ))}
      <Center>
        <Heading as="h2" size="xl"></Heading>
        <p>
          "{quote.quote}" -{quote.character}
        </p>
      </Center>
    </div>
  );
}

export default ItemDisplay;
