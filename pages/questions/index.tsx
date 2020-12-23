import { useContext } from "react";
import { NextPage, GetServerSideProps } from "next";
import AppContext from "../../context/app";
import ErrorPage from "next/error";
import {
  Box,
  Flex,
  Progress,
} from "@chakra-ui/react";
import { QuestionType } from "../../lib/types";
import QuestionCard from "../../components/QuestionCard";

const QuestionsPage: NextPage<{ questions: QuestionType[] }> = ({
  questions,
}) => {

  const { activeId } = useContext(AppContext);
  const activeQuestion = questions.find(q => q.id === activeId);

  if (!activeQuestion) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Flex flexDirection="column" alignItems="center" marginTop={20}>
      <Box w="3xl" className="question-container">
        <QuestionCard {...activeQuestion} />;
        <Progress value={10} />
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
