// import React from "react";
// import { Link } from "react-router-dom";

// function NoDataFound() {
//   return (
//     <div>
//       {" "}
//       <main>
//         <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
//           <div className="max-w-lg mx-auto space-y-3 text-center">
//             <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
//               Page not found
//             </h3>
//             <p className="text-gray-600">
//               Sorry, the page you are looking for could not be found or has been
//               removed.
//             </p>
//             <Link
//               to="/"
//               className="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
//             >
//               Go back
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default NoDataFound;
import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

function NoDataFound() {
  return (
    <Box
      as="main"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h3" size="2xl" mb={4} color="gray.800">
          Page not found
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Sorry, the page you are looking for could not be found or has been
          removed.
        </Text>
        <Link to="/">
          <Button
            colorScheme="blue"
            variant="outline"
            rightIcon={<ChevronLeftIcon />}
          >
            Go back
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

export default NoDataFound;
