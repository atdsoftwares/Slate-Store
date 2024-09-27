// import { React } from "../../Utils/CustomUtils";
// import {
//   useProductDataContext,
//   useWishlistContext,
// } from "../../Context/AllContextIndex";
// import {
//   Footer,
//   Header,
//   ProductCard,
//   Spinner,
// } from "../../Components/AllComponentIndex";

// function WishlistPage() {
//   const { wish } = useWishlistContext();
//   const { isLoading } = useProductDataContext();

//   return (
//     <div>
//       <Header />

//       {isLoading ? (
//         <Spinner />
//       ) : wish.length === 0 ? (
//         <div className="cart-mesg"> there are no items in Wishlist </div>
//       ) : (
//         <div className="wishlist-cards">
//           {wish.map((wishlistpagedata) => {
//             return (
//               <ProductCard
//                 productCardData={wishlistpagedata}
//                 key={wishlistpagedata._id}
//               />
//             );
//           })}
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default WishlistPage;

import React from "../../Utils/CustomUtils";
import {
  useProductDataContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import {
  Footer,
  Header,
  ProductCard,
  Spinner,
} from "../../Components/AllComponentIndex";
import { Box, Flex, Text, SimpleGrid, Heading } from "@chakra-ui/react";

function WishlistPage() {
  const { wish } = useWishlistContext();
  const { isLoading } = useProductDataContext();

  return (
    <Box bg="gray.100" minHeight="100vh" mt={"2rem"}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Flex direction="column" align="center" pt={8} px={4}>
        {isLoading ? (
          <Flex justify="center" align="center" height="60vh">
            <Spinner size="xl" />
          </Flex>
        ) : wish.length === 0 ? (
          <Flex justify="center" align="center" height="60vh">
            <Heading size="lg" color="gray.600">
              There are no items in your Wishlist
            </Heading>
          </Flex>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {wish.map((wishlistpagedata) => (
              <ProductCard
                productCardData={wishlistpagedata}
                key={wishlistpagedata._id}
              />
            ))}
          </SimpleGrid>
        )}
      </Flex>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default WishlistPage;
