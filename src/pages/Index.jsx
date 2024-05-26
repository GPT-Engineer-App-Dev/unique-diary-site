import { Container, Text, VStack, Box, Heading, Tag, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Button as={Link} to="/add-post" colorScheme="blue" alignSelf="flex-end">Add New Post</Button>
        {posts.length === 0 ? (
          <Text>No posts available. Click "Add New Post" to create one.</Text>
        ) : (
          posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              {post.tags.length > 0 && (
                <HStack spacing={2} mt={4}>
                  {post.tags.map((tag, idx) => (
                    <Tag key={idx} size="sm" variant="solid" colorScheme="blue">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              )}
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;