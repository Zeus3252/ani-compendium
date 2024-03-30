import {
  Flex,
  Link,
  Box,
  Image,
  Heading,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

function Compare({
  compare,
  compareModal,
  removeFromCompare,
  toggleCompareModal,
  setCompare,
}) {
  const toast = useToast();

  useEffect(() => {
    setCompare((prevState) => prevState.slice(1));
  }, []);

  function popularityCalc() {
    if (compare[0].popularity < compare[1].popularity) {
      return compare[0].title;
    } else {
      return compare[1].title;
    }
  }
  {
    compare[1] && console.log(compare[1].popularity);
  }
  {
    compare[1] && console.log(compare[1].popularity);
  }
  {
    compare[1] && console.log(compare[1].popularity);
  }
  return (
    <Box>
      <Center>
        <Button onClick={toggleCompareModal}>
          {compareModal ? "Hide Comparison" : "Show Comparison"}
        </Button>
      </Center>
      <Center>
        <Heading as="h5" size="sm" m={8}>
          {compareModal && compare.length === 0 ? "No selection" : ""}
        </Heading>
      </Center>
      <Flex className={`${compareModal ? "" : "hidden"}`} direction="row">
        {compare &&
          compare.map((item) => (
            <Flex
              key={item.id}
              alignItems="flex-start"
              my="4"
              direction={{ base: "column", md: "row" }}
              width="100%"
            >
              <Link
                href={item.url}
                flexShrink={0}
                style={{ paddingRight: "16px" }}
              >
                <Image src={item.image} width="full" height="auto" />
              </Link>
              <Box ml="2" overflow="hidden">
                <Heading as="h3" size="lg">
                  {item.title}
                </Heading>

                <i>{item.aired}</i>
                <br />
                <br />
                {item.synopsis}
                <Text fontSize="md" fontWeight="bold" color="teal.500" mt={2}>
                  Popularity: #{item.popularity}
                </Text>

                <Box>
                  <Button
                    onClick={() => {
                      removeFromCompare(item.url);
                      toast({
                        title: "Item removed.",
                        description:
                          "This item has been removed from your comparison list.",
                        status: "warning",
                        duration: 3000,
                        isClosable: true,
                      });
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            </Flex>
          ))}
      </Flex>
      {compare[0] && compare[1] && (
        <Center>
          <Text fontSize="lg" fontWeight="semibold" color="green.600" my={4}>
            {popularityCalc()} is more popular.
          </Text>
        </Center>
      )}
    </Box>
  );
}

export default Compare;
