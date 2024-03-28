import {
  Flex,
  Link,
  Box,
  Image,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";

function Compare({
  compare,
  compareModal,
  removeFromCompare,
  toggleCompareModal,
  setCompare
}) {
  
  return (
    
    <Box>
      <Center>
        {compareModal != null ? 
        <Button onClick={toggleCompareModal}>
          {compareModal ? "Show Comparison" : "Hide Comparison"}
        </Button> : ""}
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
