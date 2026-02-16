import { React, Link } from "../../Utils/CustomUtils";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Box
      bg="gray.900"
      color="gray.400"
      py={{ base: "10", md: "24" }}
      px={{ base: "4", md: "10" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justify="center"
        maxW="7xl"
        mx="auto"
      >
        {/* Image Section */}
        <Box
          flex="1"
          mb={{ base: "10", md: "0" }}
          maxW={{ base: "80%", md: "50%" }}
        >
          <Image
            src="https://svgshare.com/i/y5h.svg"
            alt="Super Cars"
            borderRadius="lg"
            boxShadow="lg"
            objectFit="cover"
            w="100%"
            h="auto"
          />
        </Box>

        {/* Text Section */}
        <Box
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          ml={{ md: "10" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="white"
            mb="4"
          >
            Before they sold out <br />
            All Super Cars
          </Heading>
          <Text fontSize="lg" mb="8">
            Try the new edge technology at a cheap cost, selling the cars at the
            best possible price in the market.
          </Text>

          {/* CTA Button */}
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="4"
            justify={{ base: "center", md: "flex-start" }}
          >
            <Button
              as={Link}
              to="/ProductListingPage"
              bg="red.500"
              color="white"
              _hover={{ bg: "red.600" }}
              px="6"
              py="2"
              borderRadius="md"
              size="lg"
            >
              Explore Cars
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export { Hero };
