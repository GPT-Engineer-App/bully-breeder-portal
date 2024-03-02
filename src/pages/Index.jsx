import React from "react";
import { Box, Container, Heading, Text, SimpleGrid, Image, Button, VStack, HStack } from "@chakra-ui/react";
import { FaPaw, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" my={10}>
        <Heading as="h1" size="3xl" mb={2}>
          XL American Bully Breeding
        </Heading>
        <Text fontSize="xl">Premium Quality Bloodlines for the Perfect Canine Companion</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
        <VStack spacing={5} alignItems="flex-start">
          <Heading as="h2" size="xl">
            About Our Breeding Program
          </Heading>
          <Text fontSize="lg">Our XL American Bully breeding program focuses on producing dogs with exceptional physical and temperamental qualities. We prioritize health, structure, and a family-friendly temperament, ensuring our bullies make the perfect addition to any home.</Text>
          <Button colorScheme="teal" leftIcon={<FaPaw />}>
            Learn More
          </Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1508801176750-a71beee9862a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxYTCUyMEFtZXJpY2FuJTIwQnVsbHl8ZW58MHx8fHwxNzA5NDA2NjEwfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
      </SimpleGrid>

      <Box as="section" mb={10}>
        <Heading as="h2" size="xl" mb={6}>
          Our Dogs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Image src="https://images.unsplash.com/photo-1508801176750-a71beee9862a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbWVyaWNhbiUyMEJ1bGx5JTIwbWFsZXxlbnwwfHx8fDE3MDk0MDY2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Image src="https://images.unsplash.com/photo-1504376379689-8d54347b26c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbWVyaWNhbiUyMEJ1bGx5JTIwZmVtYWxlfGVufDB8fHx8MTcwOTQwNjYxMXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Image src="https://images.unsplash.com/photo-1709071508585-99fbc74ee6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbWVyaWNhbiUyMEJ1bGx5JTIwcHVwcHl8ZW58MHx8fHwxNzA5NDA2NjExfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </SimpleGrid>
      </Box>

      <Box as="section" textAlign="center" my={10}>
        <Heading as="h2" size="xl" mb={6}>
          Get in Touch
        </Heading>
        <VStack spacing={3}>
          <Button colorScheme="blue" leftIcon={<FaPhoneAlt />}>
            (123) 456-7890
          </Button>
          <Button colorScheme="green" leftIcon={<FaEnvelope />}>
            contact@bullybreeds.com
          </Button>
          <Text>Follow us on social media</Text>
          <HStack>
            <Button colorScheme="pink" leftIcon={<FaInstagram />}>
              Instagram
            </Button>
            <Button colorScheme="blue" leftIcon={<FaFacebookF />}>
              Facebook
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
