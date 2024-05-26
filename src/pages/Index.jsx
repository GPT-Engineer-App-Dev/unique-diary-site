import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} borderRadius="md" mb={6}>
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">
            MyBlog
          </Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaUser /> About</Link>
            <Link href="#"><FaEnvelope /> Contact</Link>
          </HStack>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Login</Link>
          <Link href="#">Sign Up</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} spacing={4}>
        {/* Blog Posts */}
        <Box flex="3" p={4}>
          <VStack spacing={6} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give a brief overview of the post.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give a brief overview of the post.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Blog Post Title 3</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give a brief overview of the post.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading fontSize="lg" mb={4}>About Me</Heading>
          <Text mb={4}>This is a brief description about the blog author. It can include background information, interests, and other relevant details.</Text>
          <Heading fontSize="lg" mb={4}>Categories</Heading>
          <VStack align="start">
            <Link href="#">Category 1</Link>
            <Link href="#">Category 2</Link>
            <Link href="#">Category 3</Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;