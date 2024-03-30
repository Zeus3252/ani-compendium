import { Heading, Box, Text, Center } from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      <Center>
        <Heading as="h2" size="xl" m={0}>
          Ani Compendium
        </Heading>
      </Center>
      <Box>
        <Center>
          <Text fontSize="xl" fontWeight="medium" mb={6} color="gray.600">
            Tool for searching and comparing media
          </Text>
        </Center>
      </Box>
    </Box>
  );
}

export default Home;
