import useSWR from "swr";
import {
  Box,
  Alert,
  Heading,
  Progress,
} from "@chakra-ui/react";
import { FunctionComponent, useContext } from "react";
import AppContext from "../context/app";
import MessageArea from "../components/MessageArea";
import QuestionArea from "../components/QuestionArea";
import { QuestionType } from "../lib/types";
import { parse } from "dotenv/types";


const useQuestion = id => {
  const fetchQuestion = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw Error("Err, no. That URL has something wrong in it.");
    }
    const question: QuestionType = await res.json();
    return question;
  }

  const { data, error } = useSWR(`/api/questions/${id}`, fetchQuestion);

  return {
    question: data,
    isLoading: !error && !data,
    isError: error
  }
}

const QuestionCard: FunctionComponent = () => {

  const { activeId, questionLimit } = useContext(AppContext);
  const { question, isLoading, isError } = useQuestion(activeId);
  const isFinalStep = activeId === questionLimit;

  if (isError) {
    return (
      <Alert status="error">Loading failed {isError.message}</Alert>
    )
  }

  if (isLoading) {
    return <Alert status="info">Loading...</Alert>
  }

  return (
    <Box
      w="100%"
      padding={7}
      borderRadius={10}
      bg="white"
      marginBottom={10}>
      <Box>
        <Heading as="h2">{question.header}</Heading>
        {question.type === "question" ? (
          <QuestionArea
            instruction={question.instruction}
            content={question.content}
            answer={question.answer}
            isFinalStep={isFinalStep}
          />
        ) : null}
        {question.type === "message" ? (
          <MessageArea instruction={question.instruction} imgUrl={question.imgUrl} isFinalStep={isFinalStep} />
        ) : null}
      </Box>
      <Progress isAnimated hasStripe colorScheme="red" marginTop={10} value={100 * parseInt(activeId) / parseInt(questionLimit)} />
    </Box>
  );
};

export default QuestionCard;