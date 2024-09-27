// import { Link, useEffect } from "../../Utils/CustomUtils";
// // import "./CartPage.css";
// import {
//   Header,
//   Footer,
//   TotalPrice,
//   Spinner,
// } from "../../Components/AllComponentIndex";
// import {
//   useCartContext,
//   useProductDataContext,
//   useWishlistContext,
// } from "../../Context/AllContextIndex";
// import { removeFromCart, updateQty } from "../../Services/CartServices";
// import { addToWishlist, deleteWishList } from "../../Services/WishlistServices";

// function CartPage() {
//   const { dispatch, wish } = useWishlistContext();
//   const { isLoading } = useProductDataContext();
//   const { cart, state, totalprice } = useCartContext();

//   useEffect(() => {
//     dispatch({
//       type: "TOTALPRICE",
//       payload: cart.reduce(
//         (acc, item) => acc + Number(item.qty) * Number(item.price),
//         0
//       ),
//     });
//   }, [cart]);

//   return (
//     <>
//       <Header cart={cart} />
//       {/* <div className="flex justify-center items-center w-full ">
//         {isLoading ? (
//           <Spinner />
//         ) : cart.length === 0 ? (
//           <div className="mr-12 text-xl font-bold">
//             {" "}
//             there are no items in Cart{" "}
//           </div>
//         ) : (
//           <div class="container px-4 h-screen overflow-auto sm:px-8 max-w-3xl mt-12">
//             <div class="">
//               <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 flex justify-center items-center  overflow-x-auto">
//                 <div class="flex justify-center items-center min-w-full shadow rounded-lg overflow-hidden">
//                   <table class="min-w-full leading-normal">
//                     <thead>
//                       <tr>
//                         <th
//                           scope="col"
//                           class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                         >
//                           Title
//                         </th>
//                         <th
//                           scope="col"
//                           class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                         >
//                           Image
//                         </th>
//                         <th
//                           scope="col"
//                           class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                         >
//                           Price
//                         </th>
//                         <th
//                           scope="col"
//                           class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                         >
//                           Qty
//                         </th>
//                         <th
//                           scope="col"
//                           class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                         >
//                           Wishlist
//                         </th>
//                         <th
//                           scope="col"
//                           class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
//                         >
//                           Delete
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cart.map((prod) => (
//                         <tr>
//                           <td class="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
//                             <div class="flex items-center">
//                               <div class="ml-3">
//                                 <p class="text-gray-900 whitespace-no-wrap">
//                                   {prod.title}
//                                 </p>
//                               </div>
//                             </div>
//                           </td>
//                           <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                             <div class="flex-shrink-0">
//                               <img
//                                 alt="profil"
//                                 src={prod.image}
//                                 class="mx-auto object-cover h-full w-full "
//                               />
//                             </div>
//                           </td>
//                           <td class="p-2 border-b border-gray-200 bg-white text-sm">
//                             <p class="text-gray-900 whitespace-no-wrap">
//                               $ {prod.price}
//                             </p>
//                           </td>
//                           <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                             <span class="relative flex  justify-center items-center p-1 font-semibold text-green-900 leading-tight">
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   updateQty("increment", prod._id, dispatch)
//                                 }
//                                 class="p-1 h-auto w-10  bg-gray-800 font-semibold rounded-full text-white dark:bg-green-400"
//                               >
//                                 ++
//                               </button>
//                               <span class="text-xl ml-2 mr-2">{prod.qty}</span>
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   updateQty("decrement", prod._id, dispatch)
//                                 }
//                                 class="p-1 h-auto bg-gray-800 w-10 font-semibold rounded-full text-white dark:bg-red-400"
//                               >
//                                 --
//                               </button>
//                             </span>
//                           </td>
//                           <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                             <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
//                               {wish.some(
//                                 (wishlist) => wishlist._id === prod._id
//                               ) ? (
//                                 <button
//                                   onClick={(_id) =>
//                                     deleteWishList(prod._id, dispatch)
//                                   }
//                                 >
//                                   <span class="material-icons">
//                                     heart_broken
//                                   </span>
//                                 </button>
//                               ) : (
//                                 <button
//                                   onClick={() => addToWishlist(prod, dispatch)}
//                                 >
//                                   <span class="material-icons">
//                                     {" "}
//                                     favorite_border{" "}
//                                   </span>
//                                 </button>
//                               )}
//                             </span>
//                           </td>
//                           <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                             <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
//                               <button
//                                 onClick={(_id) =>
//                                   removeFromCart(prod._id, dispatch)
//                                 }
//                               >
//                                 <span class="material-icons">delete</span>
//                               </button>
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         <TotalPrice />
//       </div> */}

//       <section class=" bg-gray-100 py-12 sm:py-16 lg:py-20 mb-20">
//         <div class="mx-auto px-4 sm:px-6 lg:px-8">
//           <div class="flex items-center justify-center">
//             {/* <h4 class="text-2xl font-semibold text-gray-900">Your Cart</h4> */}
//           </div>

//           <div class="mx-auto mt-20 mb-8 max-w-2xl md:mt-12">

//             <div class="bg-white shadow">
//               <div class="px-4 py-6 sm:px-8 sm:py-10">
//                 <div class="flow-root">
//                   <ul class="-my-8">

//                     {cart.map(cartdata => {
//                       return (

//                         <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
//                           <div class="shrink-0">
//                             <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={cartdata.image} alt="" />
//                           </div>

//                           <div class="relative flex flex-1 flex-col justify-between">
//                             <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
//                               <div class="pr-8 sm:pr-5">
//                                 <p class="text-base font-semibold text-gray-900">{cartdata.title}</p>
//                                 <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
//                                   {wish.some(
//                                     (wishlist) => wishlist._id === cartdata._id
//                                   ) ? (

//                                     <button data-tooltip-target="tooltip-default"
//                                       onClick={(_id) =>
//                                         deleteWishList(cartdata._id, dispatch)
//                                       }
//                                     >
//                                       <span class="material-icons">
//                                         heart_broken
//                                       </span>
//                                     </button>

//                                   ) : (
//                                     <button
//                                       onClick={() => addToWishlist(cartdata, dispatch)}
//                                     >
//                                       <span class="material-icons">
//                                         {" "}
//                                         favorite_border{" "}
//                                       </span>
//                                     </button>
//                                   )}
//                                 </span>
//                                 <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
//                                   <button
//                                     onClick={(_id) =>
//                                       removeFromCart(cartdata._id, dispatch)
//                                     }
//                                   >
//                                     <span class="material-icons">delete</span>
//                                   </button>
//                                 </span>
//                               </div>

//                               <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
//                                 <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{cartdata.price}</p>

//                                 <div class="sm:order-1">
//                                   <div class="mx-auto flex h-8 items-stretch text-gray-600">
//                                     <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={() =>
//                                       updateQty("decrement", cartdata._id, dispatch)
//                                     }>-</button>
//                                     <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{cartdata.qty}</div>
//                                     <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={() =>
//                                       updateQty("increment", cartdata._id, dispatch)
//                                     }>+</button>
//                                   </div>

//                                 </div>
//                               </div>
//                             </div>

//                           </div>
//                         </li>)
//                     })
//                     }

//                   </ul>
//                 </div>

//                 <div class="mt-6 border-t border-b py-2">
//                   <div class="flex items-center justify-between">
//                     <p class="text-sm text-gray-400">Subtotal</p>
//                     <p class="text-lg font-semibold text-gray-900">{totalprice}</p>
//                   </div>

//                 </div>
//                 <div class="mt-6 flex items-center justify-between">
//                   <p class="text-sm font-medium text-gray-900">Total</p>
//                   <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">₹</span> {totalprice}</p>
//                 </div>

//                 <div class="mt-6 text-center">
//                   <Link to='/Checkoutpage'>

//                     <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
//                       Checkout
//                       <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                       </svg>
//                     </button>  </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default CartPage;

import { Link, useEffect } from "../../Utils/CustomUtils";
import {
  Header,
  Footer,
  TotalPrice,
  Spinner,
} from "../../Components/AllComponentIndex";
import {
  useCartContext,
  useProductDataContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import { removeFromCart, updateQty } from "../../Services/CartServices";
import { addToWishlist, deleteWishList } from "../../Services/WishlistServices";
import {
  Box,
  Image,
  Flex,
  Heading,
  Button,
  Text,
  IconButton,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { FaTrash, FaHeart, FaHeartBroken } from "react-icons/fa";

function CartPage() {
  const { dispatch, wish } = useWishlistContext();
  const { isLoading } = useProductDataContext();
  const { cart, state, totalprice } = useCartContext();

  useEffect(() => {
    dispatch({
      type: "TOTALPRICE",
      payload: cart.reduce(
        (acc, item) => acc + Number(item.qty) * Number(item.price),
        0
      ),
    });
  }, [cart]);

  return (
    <>
      <Header cart={cart} />
      <Box p={6} mt={"2rem"} mb={"8rem"}>
        {isLoading ? (
          <Flex justify="center" align="center">
            <Spinner size="xl" />
          </Flex>
        ) : cart.length === 0 ? (
          <Flex justify="center" align="center" height="60vh">
            <Heading size="lg" color="gray.600">
              There are no items in your Cart
            </Heading>
          </Flex>
        ) : (
          <Box maxW="3xl" mx="auto" mt={12}>
            <VStack spacing={6}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th>Image</Th>
                    <Th>Price</Th>
                    <Th>Qty</Th>
                    <Th>Wishlist</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cart.map((prod) => (
                    <Tr key={prod._id}>
                      <Td>
                        <Text fontWeight="bold">{prod.title}</Text>
                      </Td>
                      <Td>
                        <Image
                          boxSize="100px"
                          objectFit="cover"
                          src={prod.image}
                          alt={prod.title}
                        />
                      </Td>
                      <Td>₹{prod.price}</Td>
                      <Td>
                        <HStack>
                          <Button
                            size="sm"
                            onClick={() =>
                              updateQty("decrement", prod._id, dispatch)
                            }
                          >
                            -
                          </Button>
                          <Text>{prod.qty}</Text>
                          <Button
                            size="sm"
                            onClick={() =>
                              updateQty("increment", prod._id, dispatch)
                            }
                          >
                            +
                          </Button>
                        </HStack>
                      </Td>
                      <Td>
                        {wish.some((wishlist) => wishlist._id === prod._id) ? (
                          <IconButton
                            icon={<Icon as={FaHeartBroken} />}
                            aria-label="Remove from Wishlist"
                            onClick={() => deleteWishList(prod._id, dispatch)}
                          />
                        ) : (
                          <IconButton
                            icon={<Icon as={FaHeart} />}
                            aria-label="Add to Wishlist"
                            onClick={() => addToWishlist(prod, dispatch)}
                          />
                        )}
                      </Td>
                      <Td>
                        <IconButton
                          icon={<Icon as={FaTrash} />}
                          aria-label="Remove from Cart"
                          onClick={() => removeFromCart(prod._id, dispatch)}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Divider />
              <Flex justify="space-between" w="100%">
                <Text fontSize="lg" fontWeight="bold">
                  Subtotal:
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  ₹{totalprice}
                </Text>
              </Flex>
              <Flex justify="space-between" w="100%">
                <Text fontSize="2xl" fontWeight="bold">
                  Total:
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  ₹ {totalprice}
                </Text>
              </Flex>
              <Link to="/Checkoutpage">
                <Button
                  colorScheme="teal"
                  w="full"
                  size="lg"
                  rightIcon={<Icon as={FaHeart} />}
                >
                  Checkout
                </Button>
              </Link>
            </VStack>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
}

export default CartPage;
