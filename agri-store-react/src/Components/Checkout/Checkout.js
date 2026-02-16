import React from "../../Utils/CustomUtils";
import {
  AddAddress,
  Razorpay,
  Spinner,
} from "../../Components/AllComponentIndex";
import {
  useAdressContext,
  useCartContext,
  useProductDataContext,
} from "../../Context/AllContextIndex";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";

function Checkout() {
  const { cart, totalprice, discount } = useCartContext();
  const { fulladdressdata } = useAdressContext();
  const { isLoading } = useProductDataContext();

  return (
    <Flex direction="column" p={6} gap={6}>
      {/* Cart Table */}
      <Box p={6} shadow="lg" borderWidth={1} borderRadius="lg" bg="white">
        <Heading size="lg" mb={6}>
          Cart Items
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Your cart details</TableCaption>
            <Thead bg="gray.100">
              <Tr>
                <Th>Title</Th>
                <Th>Quantity</Th>
                <Th>Price (₹)</Th>
                <Th>Total (₹)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((prod) => (
                <Tr key={prod.id}>
                  <Td>{prod.title}</Td>
                  <Td>{prod.qty}</Td>
                  <Td>₹{prod.price.toFixed(2)}</Td>
                  <Td>₹{(prod.price * prod.qty).toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Summary Box */}
      <Box p={6} shadow="lg" borderWidth={1} borderRadius="lg" bg="gray.50">
        <Heading size="lg" mb={6}>
          Order Summary
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
          <GridItem>
            <Text fontSize="lg">Total Price:</Text>
            <Text fontWeight="bold" fontSize="lg">
              ₹{totalprice.toFixed(2)}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg">Discount:</Text>
            <Text fontWeight="bold" fontSize="lg">
              -₹{discount.toFixed(2)}
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg">Delivery Charges:</Text>
            <Text fontWeight="bold" fontSize="lg">
              ₹50.00
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg">Grand Total:</Text>
            <Text fontWeight="bold" fontSize="lg" color="teal.500">
              ₹{(totalprice + 50 - discount).toFixed(2)}
            </Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Delivery Details */}
      <Box p={6} shadow="lg" borderWidth={1} borderRadius="lg" bg="white">
        <Flex align="center" mb={6}>
          <Heading size="lg" mr={6}>
            Delivery Details
          </Heading>
          <AddAddress />
        </Flex>
        {isLoading ? (
          <Flex justify="center" align="center" height="200px">
            <Spinner size="xl" />
          </Flex>
        ) : fulladdressdata.length === 0 ? (
          <Text textAlign="center" fontSize="lg" color="gray.500">
            Please add an address to proceed.
          </Text>
        ) : (
          <TableContainer>
            <Table variant="simple">
              <Thead bg="gray.100">
                <Tr>
                  <Th>Select</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Address</Th>
                </Tr>
              </Thead>
              <Tbody>
                {fulladdressdata.map((item) => (
                  <Tr key={item.id}>
                    <Td>
                      <input type="radio" name="address" />
                    </Td>
                    <Td>{item.fullname}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.phone}</Td>
                    <Td>{item.address}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>

      {/* Payment Button */}
      <Box p={6} shadow="lg" borderWidth={1} borderRadius="lg" bg="gray.50" mb={"4rem"}>
        {fulladdressdata.length === 0 ? (
          <Text textAlign="center" fontSize="lg" color="gray.500">
            Add address to enable payment
          </Text>
        ) : (
          <Razorpay />
        )}
      </Box>
    </Flex>
  );
}

export default Checkout;
