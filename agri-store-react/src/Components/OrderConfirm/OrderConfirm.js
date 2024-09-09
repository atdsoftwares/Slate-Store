import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useProductContext } from "../../Context/AllContextIndex";

function OrderConfirm() {
  const { state } = useProductContext();
  const orderData = state;
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    <Box mt={26} p={4} maxW="container.md" mx="auto">
      <Box minH="100vh" py={6}>
        <Box
          bg="gray.800"
          color="white"
          p={6}
          borderRadius="md"
          shadow="md"
          textAlign="center"
        >
          <Box
            as="svg"
            viewBox="0 0 24 24"
            color="green.600"
            boxSize={16}
            mx="auto"
            mb={6}
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </Box>
          <VStack spacing={4}>
            <Heading size={headingSize} color="white">
              Payment Done!
            </Heading>
            <Text color="gray.600">
              Thank you for completing your secure online payment.
            </Text>
            <Text>Have a great day!</Text>
            <Button
              as={Link}
              to="/"
              colorScheme="blue"
              variant="solid"
              size="lg"
              px={12}
              py={3}
            >
              GO BACK
            </Button>
          </VStack>
        </Box>
      </Box>
      <Box mt={2}>
        <Box p={4} mt={"-18rem"} bg="white" borderRadius="md" shadow="md">
          <Heading size="md" mb={4}>
            Order Details
          </Heading>
          <Stack spacing={4}>
            <Text fontWeight="bold">
              Order Id: {orderData.orderData.order_id}
            </Text>
            <Text fontWeight="bold">
              Product Quantity: {orderData.orderData.cart.length}
            </Text>
            <Box>
              <Text fontWeight="bold">Order to be Delivered At:</Text>
              {orderData.orderData.address.map((address, index) => (
                <Text key={index}>
                  Name: {address.fullname}, Phone: {address.phone}, Address:{" "}
                  {address.address}, Pincode: {address.pincode}
                </Text>
              ))}
            </Box>
            <Text fontWeight="bold">
              Total Paid amount: {orderData.orderData.amount}
            </Text>
            <Heading size="sm" mt={4}>
              Product Ordered List:
            </Heading>
            <Box overflowX="auto">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th ml="2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.orderData.cart.map((prod) => (
                    <tr key={prod.title}>
                      <td>{prod.title}</td>
                      <td>
                        <img
                          src={prod.image}
                          alt="purchased-product"
                          style={{ height: "5rem", width: "10rem" }}
                        />
                      </td>
                      <td>{prod.qty}</td>
                      <td>₹{prod.price}</td>
                      <td>₹{prod.qty * prod.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
            <Button
              as={Link}
              to="/"
              colorScheme="blue"
              variant="outline"
              mb={"6rem"}
            >
              Back to Home
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderConfirm;
