// import { React, toast, useNavigate } from "../../Utils/CustomUtils";
// import {
//   useCatagoriesFilterContext,
//   useProductDataContext,
// } from "../../Context/AllContextIndex";
// import {
//   Footer,
//   Header,
//   Spinner,
//   ProductCard,
//   Sidebar,
// } from "../../Components/AllComponentIndex";

// function ProductlistingPage() {
//   const { isLoading } = useProductDataContext();
//   const { searchbarData } = useCatagoriesFilterContext();

//   return (
//     <div className="bg-gray-700 h-screen">
//       <Header />
//       <div className="flex justify-start items-start">
//         <Sidebar />
//         <div className="flex flex-wrap   ml-64 mt-24 mb-8  items-center justify-center">
//           {isLoading ? (
//             <Spinner />
//           ) : (
//             searchbarData.map((productCardData) => {
//               return (
//                 <ProductCard
//                   productCardData={productCardData}
//                   key={productCardData._id}
//                 />
//               );
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductlistingPage;
import React from "../../Utils/CustomUtils";
import {
  useCatagoriesFilterContext,
  useProductDataContext,
} from "../../Context/AllContextIndex";
import {
  Footer,
  Header,
  Spinner,
  ProductCard,
  Sidebar,
} from "../../Components/AllComponentIndex";
import {
  Box,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Heading,
  Stack,
} from "@chakra-ui/react";

function ProductlistingPage() {
  const { isLoading } = useProductDataContext();
  const { searchbarData } = useCatagoriesFilterContext();

  // Responsive layout values
  const sidebarWidth = useBreakpointValue({ base: "100%", md: "250px" });
  const contentMarginTop = useBreakpointValue({ base: "16", md: "24" });

  return (
    <Box bg="gray.100" minHeight="100vh" mb={"6rem"}>
      <Header />
      <Flex direction={{ base: "column", md: "row" }} pt={4}>
        {/* Sidebar */}
        <Box w={sidebarWidth} px={4} py={6} bg="white" shadow="md">
          <Sidebar />
        </Box>

        {/* Product Listing */}
        <Box flex="1" px={4}  mt={"4rem"}>
          {isLoading ? (
            <Flex justify="center" align="center" height="60vh">
              <Spinner size="xl" />
            </Flex>
          ) : searchbarData.length === 0 ? (
            <Flex justify="center" align="center" height="60vh">
              <Heading>No Products Found</Heading>
            </Flex>
          ) : (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
              {searchbarData.map((productCardData) => (
                <ProductCard
                  productCardData={productCardData}
                  key={productCardData._id}
                />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}

export default ProductlistingPage;
