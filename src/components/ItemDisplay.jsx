import {
  Button,
  Input,
  Image,
  Link,
  Flex,
  Box,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

function ItemDisplay({
  animeResults,
  searchTime,
  setSearchString,
  addToCompare,
  setCompareModal,
  quote,
  handleKeyPress,
  didSearch,
}) {
  const toast = useToast();
  return (
    <Box>
      <Flex>
        <Input
          size="lg"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchString(e.target.value)}
          onKeyDown={handleKeyPress}
          variant="filled"
        ></Input>
        <Button size="lg" colorScheme="blue" onClick={searchTime}>
          Search
        </Button>
      </Flex>

      {animeResults &&
        animeResults.map((item) => (
          <Flex
            alignItems="flex-start"
            my="4"
            p="4"
            direction={{ base: "column", md: "row" }}
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="lg"
            boxShadow="sm"
            _hover={{
              boxShadow: "md",
              borderColor: "gray.300",
            }}
            transition="all 0.2s ease-in-out"
          >
            <Link
              href={item.url}
              flexShrink={0}
              position="relative"
              style={{ paddingRight: "16px" }}
            >
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
                  colorScheme="green"
                  size="xs"
                  onClick={() => {
                    addToCompare(
                      item.url,
                      item.images.jpg.image_url,
                      item.synopsis,
                      item.title,
                      item.aired.string
                    );
                    setCompareModal(true);
                    toast({
                      title: "Item added.",
                      description:
                        "This item has been added to your comparison list.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Compare
                </Button>
              </Box>
            </Box>
          </Flex>
        ))}

      {didSearch && animeResults.length < 1 && (
        <Center>
          <Heading as="h5" size="sm" my="16">
            No results found
          </Heading>
        </Center>
      )}
      <Box>
        <Center>
          <Heading as="h2" size="xl"></Heading>
          {quote && quote.quote && quote.quote.length > 0 && (
            <Text>
              <br />"{quote.quote}" - {quote.character}
            </Text>
          )}
        </Center>
      </Box>
    </Box>
  );
}

export default ItemDisplay;
