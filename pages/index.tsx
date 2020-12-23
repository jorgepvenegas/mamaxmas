import { NextPage } from "next";
import NextLink from "next/link";
import { Heading, Link, Flex, Image, Text } from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  const { NEXT_PUBLIC_USERNAME } = process.env;
  return (
    <Flex bg="red.300" flexDirection="column" alignItems="center">
      <Heading as="h1" size="xl">Hey {NEXT_PUBLIC_USERNAME}! No peeking.</Heading>
      <Heading as="h2" size="lg">Ok?</Heading>
      <Image src="https://media.giphy.com/media/ELoRBat8ZCTSM/giphy.gif" alt="Gif 1" />
      <Text fontSize="md">The elves are hard at work. Come back on December 25th.</Text>
      <Image src="https://media.giphy.com/media/MrxXXBriEIKBO/giphy.gif" alt="Gif 2" />
      <NextLink href="/questions" passHref>
        <Link>Questions</Link>
      </NextLink>
    </Flex>
  )
}

export default IndexPage;