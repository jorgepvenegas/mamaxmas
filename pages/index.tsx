import MagicWordForm from "../components/QuestionForm";
import { useRouter } from 'next/router'
import { Text, Heading, Flex, Box } from "@chakra-ui/react";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const { NEXT_PUBLIC_USERNAME } = process.env;
  const router = useRouter();

  return (
    <Flex flexDirection="column" alignItems="center" marginTop={20}>
      <Box
        flexDirection="column"
        alignItems="center"
        w="3xl"
        className="question-container">
        <Box
          w="100%"
          minHeight={700}
          padding={7}
          borderRadius={10}
          bg="white"
          align="center"
          marginBottom={10}>
          <Heading as="h1" size="xl">
            Hi {NEXT_PUBLIC_USERNAME}! Welcome!
          </Heading>
          <Box marginTop="40">
            <Box width="70%">
              <Text>Oh hello there! Enter the magic word</Text>
              <MagicWordForm
                color="red"
                questionName="magicWord"
                answer={process.env.NEXT_PUBLIC_TOKEN}
                errorMessage="Not so fast! That's incorrect."
                buttonText={"Let's Go!"}
                onSuccess={() => {
                  router.push(`/questions`);
                }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default IndexPage;
