import { NextPage, GetServerSideProps } from "next";
import ErrorPage from "next/error";
import {
  Box,
  Heading,
  Input,
  Flex,
  Image,
  Text,
  ListItem,
  UnorderedList,
  FormControl,
  Button,
  Progress,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { QuestionType } from "../../lib/types";

const QuestionArea: FunctionComponent<{
  instruction: string;
  content: string;
}> = ({ instruction, content }) => {
  return (
    <FormControl id="email">
      <Text fontSize="xl">{instruction}</Text>
      <Box marginY={10}>
        <Text as="cite" lineHeight={10} marginLeft={10} fontSize="xl">
          {content}
        </Text>
      </Box>
      <Flex flexDirection="column">
        <Input type="text" placeholder={"Type your answer"} />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        <Button mt={2} colorScheme="green" type="submit" size={"md"}>
          Submit Answer
        </Button>
      </Flex>
    </FormControl>
  );
};

const MessageArea: FunctionComponent<{
  instruction: string;
  imgUrl: string;
}> = ({ instruction, imgUrl }) => {
  return (
    <>
      <Box marginBottom={10} alignContent="center">
        <Text lineHeight={10} fontSize="xl">
          {instruction}
        </Text>
      </Box>
      <Flex justifyContent="center">
        <Image src={imgUrl}></Image>
      </Flex>
    </>
  );
};

const QuestionCard: FunctionComponent<QuestionType> = ({
  header,
  type,
  instruction,
  content,
  imgUrl,
}) => {
  return (
    <ListItem
      w="100%"
      padding={7}
      borderRadius={10}
      bg="white"
      marginBottom={10}>
      <Box>
        <Heading as="h2">{header}</Heading>
        {type === "question" ? (
          <QuestionArea
            instruction={instruction}
            content={content}
          />
        ) : null}
        {type === "message" ? (
          <MessageArea instruction={instruction} imgUrl={imgUrl} />
        ) : null}
      </Box>
    </ListItem>
  );
};

const QuestionsPage: NextPage<{ questions: QuestionType[] }> = ({
  questions,
}) => {
  if (!questions) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading as="h1">Questions</Heading>
      <Box w="3xl" className="question-container">
        <UnorderedList>
          {questions.map((q, i) => {
            return <QuestionCard key={i} {...q} />;
          })}
        </UnorderedList>
        <Progress value={80} />
      </Box>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const result = await fetch(`http://${req.headers.host}/api/questions`);
    const questions: QuestionType[] = await result.json();

    return {
      props: { questions },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default QuestionsPage;
