import { useRouter } from "next/router";
import {
  Text,
  Heading,
  Flex,
  Box,
  Center,
  Image,
  Button,
} from "@chakra-ui/react";
import { NextPage } from "next";
import AppContext from "../../context/app";
import { useContext } from "react";

const CongratulationsPage: NextPage = () => {
  const { NEXT_PUBLIC_USERNAME } = process.env;
  const router = useRouter();
  const { selectedFrame, selectedPhotos } = useContext(AppContext);

  const isReady = selectedFrame !== null && selectedPhotos.length !== 0;

  const continueToNextStep = () => {
    router.push("/photos");
  };

  return (
    <Flex flexDirection="column" alignItems="center" marginTop={20}>
      <Box
        w={1024}
        minHeight={700}
        padding={7}
        borderRadius={10}
        bg="white"
        align="center"
        marginBottom={10}>
        {isReady ? (
          <>
            <Heading as="h1" size="xl">
              The elves are getting to work!
              {/* {NEXT_PUBLIC_USERNAME}! */}
            </Heading>
            <Box marginTop={10} width="80%">
              <Center>
                <Image
                  marginBottom={10}
                  src={`https://media.giphy.com/media/lXmHuSKBb9VQY/giphy.gif`}></Image>
              </Center>
              <Text marginBottom={10} fontSize={25}>
                We’ll mail you a framed print to display in your new home!
              </Text>
              <Center bg="gray.200" rounded={10}>
                {selectedPhotos.map(photo => (
                  <Box padding={2}>
                    <Image
                      rounded={10}
                      src={`${process.env.NEXT_PUBLIC_ASSETS}/assets/photos/photo-${photo.id}.jpg`}></Image>
                  </Box>
                ))}
              </Center>
              <Text fontSize={50}>+</Text>
              <Center>
                <Box>
                  <Image
                    rounded={10}
                    maxHeight={300}
                    src={`${process.env.NEXT_PUBLIC_ASSETS}/assets/frames/${selectedFrame}.jpeg`}></Image>
                </Box>
              </Center>
              <Box paddingY={10}>
                <Text as="cite" fontSize={25}>
                  Merry Christmas {NEXT_PUBLIC_USERNAME}. With love from Caroline
                  and Jorge.
                </Text>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Heading as="h1" size="xl">
              Oops, something is missing.
            </Heading>
            <Box marginTop={10} width="80%">
              <Text>I think you didn't select a frame or a photo</Text>
              <Flex flexDirection="column">
                <Button
                  mt={8}
                  colorScheme="red"
                  onClick={() => continueToNextStep()}>
                  Go back to the photos
                </Button>
              </Flex>
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default CongratulationsPage;
