import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiCarthrottle } from "react-icons/si";
import React from "react";

function Footer() {
  return (
    <Box
      bg="gray.900"
      color="gray.400"
      py={8}
      w="100%"
      height={"6rem"}
      position="fixed"
      bottom="0"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
        >
          <Flex align="center" mb={{ base: 4, sm: 0 }}>
            <Icon as={SiCarthrottle} w={10} h={10} color="red.500" mr={3} />
            <Text fontSize="xl" color="white">
              CarSale
            </Text>
          </Flex>

          <Text fontSize="sm">
            © 2023 CarSale —
            <Link
              href="https://prankurpandeyy.netlify.com"
              ml={1}
              isExternal
              color="gray.500"
            >
              @prankurpandeyy
            </Link>
          </Text>

          <Flex mt={{ base: 4, sm: 0 }} spacing={4}>
            <Link href="https://fb.com/prankurpandeyy" isExternal>
              <Icon as={FaFacebook} w={5} h={5} />
            </Link>
            <Link href="https://twitter.com/prankurpandeyy" isExternal ml={3}>
              <Icon as={FaTwitter} w={5} h={5} />
            </Link>
            <Link href="https://instagram.com/prankurpandeyy" isExternal ml={3}>
              <Icon as={FaInstagram} w={5} h={5} />
            </Link>
            <Link
              href="https://linkedin.com/in/prankurpandeyy"
              isExternal
              ml={3}
            >
              <Icon as={FaLinkedin} w={5} h={5} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export { Footer };
