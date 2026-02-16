import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "../../Utils/CustomUtils";
import { useLoginContext } from "../../Context/AllContextIndex";
import { signUpHandler } from "../../Services/AuthServices";
import { useEffect, useState } from "react";

function SignupInputs() {
  const { dispatch, name, email, password } = useLoginContext();
  const navigate = useNavigate();
  const toast = useToast();

  function submitSignUpData(e) {
    e.preventDefault();
    signUpHandler(name, email, password)
      .then(() => {
        navigate("/LoginPage");
        toast({
          title: "Signup Successful.",
          description: "You've been successfully signed up.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Signup Failed.",
          description: error.message || "Something went wrong.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }

  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [name, email, password]);

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
          <Heading mb={6} textAlign="center" size="lg">
            Sign Up
          </Heading>
          <form onSubmit={submitSignUpData}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    dispatch({ type: "NAME", payload: e.target.value })
                  }
                  placeholder="Enter your name"
                  bg="gray.700"
                  borderColor="gray.600"
                  _placeholder={{ color: "gray.400" }}
                  focusBorderColor="blue.400"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                  placeholder="Enter your email"
                  bg="gray.700"
                  borderColor="gray.600"
                  _placeholder={{ color: "gray.400" }}
                  focusBorderColor="blue.400"
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
                  bg="gray.700"
                  borderColor="gray.600"
                  _placeholder={{ color: "gray.400" }}
                  focusBorderColor="blue.400"
                />
              </FormControl>
              <Button
                mt={4}
                colorScheme="blue"
                type="submit"
                isDisabled={isDisabled}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
          <Text mt={4} textAlign="center">
            Already have an account?{" "}
            <Button
              variant="link"
              colorScheme="blue"
              onClick={() => navigate("/LoginPage")}
            >
              Login
            </Button>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
}

export default SignupInputs;
