import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
  useToast,
  Container,
} from "@chakra-ui/react";
import {
  Link,
  useNavigate,
  useEffect,
  useState,
} from "../../Utils/CustomUtils";
import { useLoginContext } from "../../Context/AllContextIndex";
import { loginHandler } from "../../Services/AuthServices";

function LoginInputs() {
  const { dispatch, email, password, name } = useLoginContext();
  const navigate = useNavigate();
  const toast = useToast();

  function submitLoginData(e) {
    e.preventDefault();
    loginHandler(email, password, dispatch);
    navigate("/ProductListingPage");
  }

  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [email, password]);

  function setGuestLoginData(e) {
    e.preventDefault();
    const guestEmail = "6prankur@gmail.com";
    const guestPassword = "12345678";
    dispatch({ type: "EMAIL", payload: guestEmail });
    dispatch({ type: "PASSWORD", payload: guestPassword });
    dispatch({ type: "NAME", payload: "Guest" });
    toast({
      title: "Guest login credentials set",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <Container maxW="md" py={16} centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        color="white"
      >
        <VStack
          spacing={6}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          bg="gray.700"
          w="sm"
        >
          <Heading>Log In</Heading>
          <Text>Enter your credentials to get access to your account</Text>

          <form onSubmit={submitLoginData} style={{ width: "100%" }}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                  placeholder="Enter your email"
                  focusBorderColor="teal.500"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                  placeholder="Enter your password"
                  focusBorderColor="teal.500"
                />
              </FormControl>

              {error && <Text color="red.400">{error}</Text>}

              <Button
                type="submit"
                colorScheme="teal"
                w="full"
                isDisabled={isDisabled}
              >
                Login
              </Button>

              <Button colorScheme="blue" w="full" onClick={setGuestLoginData}>
                Guest Login
              </Button>
            </VStack>
          </form>

          <Text fontSize="sm">
            Don't have an account?{" "}
            <ChakraLink as={Link} to="/SignupPage" color="teal.300">
              Sign Up
            </ChakraLink>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
}

export default LoginInputs;
