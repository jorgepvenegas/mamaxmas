import MagicWordForm from "../components/QuestionForm";
import { useRouter } from "next/router";
import { Text, Heading, Flex, Box, Center, Image } from "@chakra-ui/react";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const router = useRouter();

  return (
    <Flex flexDirection="column" alignItems="center" marginTop={20}>
      <Box
        w="3xl"
        minHeight={700}
        padding={7}
        borderRadius={10}
        bg="white"
        align="center"
        marginBottom={10}>
        <Heading as="h1" size="xl">
          Seasons Greetings!
        </Heading>
        <Box marginTop={10}>
          <Box width="70%">
            <Center>
              <Image
                marginBottom={10}
                rounded={10}
                src={`https://media.giphy.com/media/3o6fJcaJImuodOjEis/giphy.gif`}></Image>
            </Center>
            <Text marginBottom={10} fontSize={25}>
              Check your phone for the secret code to begin your yuletide quest.
            </Text>
            <MagicWordForm
              color="red"
              questionName="magicWord"
              answer={process.env.NEXT_PUBLIC_TOKEN}
              errorMessage="Not so fast! That's incorrect."
              buttonText={"Let's Go!"}
              onSuccess={() => {
                // localStorage.setItem("isLoggedIn", "true");
                router.push(`/questions`);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default IndexPage;
