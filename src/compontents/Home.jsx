import { Center, Heading } from "@chakra-ui/react";

function Home(quote) {
  <Center>
    <Heading as="h2" size="xl"></Heading>
    <p>
      "{quote.quote}" -{quote.character}
    </p>
  </Center>;
}

export default Home;
