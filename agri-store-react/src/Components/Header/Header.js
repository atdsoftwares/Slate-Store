import { React, Link, useState } from "../../Utils/CustomUtils";
import {
  useCartContext,
  useFilterContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Icon,
  Text,
  Badge,
  VStack,
  Stack,
} from "@chakra-ui/react";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiLogIn,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const { dispatch } = useFilterContext();
  const token = window.localStorage.getItem("token");

  return (
    <Box
      bg="gray.700"
      px={4}
      shadow="lg"
      position="fixed"
      top="0"
      w="100%"
      zIndex="10"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <FiX /> : <FiMenu />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Link to="/">
            <Text fontSize="lg" fontWeight="bold" color="white">
              Car-kit
            </Text>
          </Link>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <InputGroup>
              <Input
                placeholder="Search"
                bg="white"
                onChange={(e) =>
                  dispatch({ type: "SEARCHBAR", payload: e.target.value })
                }
              />
              <InputRightElement>
                <Icon as={FiSearch} />
              </InputRightElement>
            </InputGroup>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <HStack spacing={6}>
            <Link to="/ProductListingPage">
              <Icon as={FiShoppingCart} color="white" boxSize={6} />
            </Link>
            <Link to="/WishlistPage">
              <Flex position="relative">
                <Icon as={FiHeart} color="white" boxSize={6} />
                <Badge
                  position="absolute"
                  top="-1"
                  right="-2"
                  bg="red.500"
                  rounded="full"
                  px={2}
                  fontSize="xs"
                  color="white"
                >
                  {wish.length}
                </Badge>
              </Flex>
            </Link>
            <Link to="/CartPage">
              <Flex position="relative">
                <Icon as={FiShoppingCart} color="white" boxSize={6} />
                <Badge
                  position="absolute"
                  top="-1"
                  right="-2"
                  bg="red.500"
                  rounded="full"
                  px={2}
                  fontSize="xs"
                  color="white"
                >
                  {cart.length}
                </Badge>
              </Flex>
            </Link>
            {!token ? (
              <Link to="/LoginPage">
                <Icon as={FiLogIn} color="white" boxSize={6} />
              </Link>
            ) : (
              <Link to="/Accountpage">
                <Icon as={FiUser} color="white" boxSize={6} />
              </Link>
            )}
          </HStack>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <VStack as="nav" spacing={4}>
            <Input
              placeholder="Search"
              bg="white"
              onChange={(e) =>
                dispatch({ type: "SEARCHBAR", payload: e.target.value })
              }
            />
            <Link to="/ProductListingPage">Products</Link>
            <Link to="/WishlistPage">Wishlist</Link>
            <Link to="/CartPage">Cart</Link>
            {!token ? (
              <Link to="/LoginPage">Login</Link>
            ) : (
              <Link to="/Accountpage">Account</Link>
            )}
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Header;
