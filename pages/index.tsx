import { NextPage } from "next";
import NextLink from "next/link";
import {Heading, Link, Flex, Image, Text} from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={5}>
      <Heading as="h1" size="xl">Hey! No peeking.</Heading>
      <Heading as="h2" size="lg">Ok?</Heading>
      <Image src="https://media.giphy.com/media/ELoRBat8ZCTSM/giphy.gif" alt="Gif 1" />
      <Text fontSize="md">The elves are hard at work. Come back on December 25th.</Text>
      <Image src="https://media.giphy.com/media/MrxXXBriEIKBO/giphy.gif" alt="Gif 2" />
    </Flex>
  )
}

export default IndexPage;