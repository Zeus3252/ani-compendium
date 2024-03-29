import {
  Flex,
  Link,
  Box,
  Image,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";

function Compare({
  compare,
  compareModal,
  removeFromCompare,
  toggleCompareModal,
  setCompare,
}) {
  console.log(compare.length);

  useEffect(() => {
    setCompare((prevState) => prevState.slice(1));
  }, []);

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
              direction="row"
              width="100%"
            >
              <Link href={item.url} flexShrink={0}>
                <Image src={item.image} width="full" height="auto" />
              </Link>
              <Box ml="2" overflow="hidden">
                <Heading as="h3" size="lg">
                  {item.title}
                </Heading>
                <br />
                {item.synopsis}
                <Box>
                  <Button onClick={() => removeFromCompare(item.url)}>
                    Remove
                  </Button>
                </Box>
              </Box>
            </Flex>
          ))}
      </Flex>
    </Box>
  );
}

export default Compare;
