// import {
//   useState,
//   Tabs,
//   TabList,
//   TabPanel,
//   Tab,
//   Modal,
// } from "../../Utils/CustomUtils";
// // import "../../Utils/CustomCSSUtils.css";
// import {
//   useAdressContext,
//   useProductContext,
//   useCartContext,
// } from "../../Context/AllContextIndex";
// import { Accountdetails, Address } from "../../Components/AllComponentIndex";
// import { deleteAddress, editAddress } from "../../Services/AddressServices";

// function AccountTabs() {
//   const { fulladdressdata, dispatch } = useAdressContext();
//   const [isOpen, setIsOpen] = useState(false);
//   const { state } = useProductContext();
//   const orderData = state;
//   const { cart, totalprice, discount } = useCartContext();

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }
//   return (
//     <div className="mt-24  flex justify-center items-center flex-col">

//       <Tabs>
//         <TabList>
//           <Tab>ACCOUNT </Tab>
//           <Tab>ADDRESS</Tab>
//           <Tab>ORDER</Tab>
//         </TabList>

//         <TabPanel>
//           <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab"
//           >
//             <Accountdetails />
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div>
//             <button
//               onClick={toggleModal}
//               type="button"
//               class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//             >
//               Address+
//             </button>
//             <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" className="modal"
//             >
//               <div className="address-form">
//                 <Address />
//               </div>

//               <div class="flex space-x-2 justify-center">
//                 <button onClick={toggleModal} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//                 >
//                   X
//                 </button>
//               </div>
//             </Modal>

//             <div className="shadow-xl ">
//               {fulladdressdata &&
//                 fulladdressdata.map((address) => (
//                   <div className="mt-2 ">
//                     <div className="fullname">
//                       <h5> Name : {address.fullname}</h5>
//                     </div>
//                     <div className="email">
//                       <p>Email :{address.email}</p>
//                     </div>
//                     <div className="phone">
//                       <p>Phone: {address.phone}</p>
//                     </div>
//                     <div className="address">
//                       <p>Address: {address.address}</p>
//                     </div>
//                     <div className="action-btn">
//                       <button
//                         className="hover:bg-red-500"
//                         title="delete"
//                         onClick={() =>
//                           deleteAddress(address.id, dispatch, fulladdressdata)
//                         }
//                       >
//                         <span class="material-icons">delete</span>
//                       </button>
//                     </div>
//                     <hr />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div class="flex flex-col">
//             <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
//               <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//                 <div class="overflow-hidden">
//                   <table class="min-w-full">
//                     <thead class="border-b">
//                       <tr>
//                         <th
//                           scope="col"
//                           class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                         >
//                           Title
//                         </th>
//                         <th
//                           scope="col"
//                           class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                         >
//                           Image
//                         </th>
//                         <th
//                           scope="col"
//                           class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                         >
//                           Purchased At
//                         </th>
//                         <th
//                           scope="col"
//                           class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                         >
//                           Qty
//                         </th>
//                         <th
//                           scope="col"
//                           class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                         >
//                           Price
//                         </th>
//                         <th
//                           scope="col"
//                           class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                         >
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {orderData.orderData.cart &&
//                         orderData.orderData.cart.map((prod) => (
//                           <tr class="border-b shadow-md">
//                             <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                               {prod.title}
//                             </td>
//                             <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                               <div class="flex-shrink-0">
//                                 <img
//                                   alt="profil"
//                                   src={prod.image}
//                                   class="mx-auto object-cover h-24 cover w-24 "
//                                 />
//                               </div>
//                             </td>
//                             <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                               {prod.updatedAt}
//                             </td>
//                             <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                               {prod.qty}
//                             </td>{" "}
//                             <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                               {prod.price}
//                             </td>{" "}
//                             <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                               {prod.qty * prod.price}
//                             </td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// }

// export default AccountTabs;

import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
} from "@chakra-ui/react";
import {
  useAdressContext,
  useProductContext,
  useCartContext,
} from "../../Context/AllContextIndex";
import { Accountdetails, Address } from "../../Components/AllComponentIndex";
import { deleteAddress } from "../../Services/AddressServices";

function AccountTabs() {
  const { fulladdressdata, dispatch } = useAdressContext();
  const { state } = useProductContext();
  const orderData = state;
  const { cart } = useCartContext();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mt={24} p={4} maxWidth="1200px" mx="auto">
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>ACCOUNT</Tab>
          <Tab>ADDRESS</Tab>
          <Tab>ORDER</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Accountdetails />
          </TabPanel>
          <TabPanel>
            <Button colorScheme="blue" onClick={onOpen} mb={4}>
              Address+
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Address</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Address />
                </ModalBody>
              </ModalContent>
            </Modal>

            <Box mt={4} p={4} shadow="md" borderWidth="1px">
              {fulladdressdata &&
                fulladdressdata.map((address) => (
                  <Box
                    key={address.id}
                    p={4}
                    mb={4}
                    borderWidth="1px"
                    borderRadius="md"
                  >
                    <Box mb={2}>
                      <strong>Name:</strong> {address.fullname}
                    </Box>
                    <Box mb={2}>
                      <strong>Email:</strong> {address.email}
                    </Box>
                    <Box mb={2}>
                      <strong>Phone:</strong> {address.phone}
                    </Box>
                    <Box mb={2}>
                      <strong>Address:</strong> {address.address}
                    </Box>
                    <Button
                      colorScheme="red"
                      onClick={() =>
                        deleteAddress(address.id, dispatch, fulladdressdata)
                      }
                    >
                      Delete
                    </Button>
                  </Box>
                ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box overflowX="auto">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th>Image</Th>
                    <Th>Purchased At</Th>
                    <Th>Qty</Th>
                    <Th>Price</Th>
                    <Th>Total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {orderData.orderData.cart &&
                    orderData.orderData.cart.map((prod) => (
                      <Tr key={prod.id}>
                        <Td>{prod.title}</Td>
                        <Td>
                          <Box>
                            <img
                              alt="Product"
                              src={prod.image}
                              style={{
                                maxWidth: "100px",
                                maxHeight: "100px",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                        </Td>
                        <Td>{prod.updatedAt}</Td>
                        <Td>{prod.qty}</Td>
                        <Td>{prod.price}</Td>
                        <Td>{prod.qty * prod.price}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default AccountTabs;
