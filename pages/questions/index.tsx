import { NextPage } from "next";

import {
  Box,
  Flex,
  Progress,
} from "@chakra-ui/react";
import QuestionCard from "../../components/QuestionCard";

const QuestionsPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" marginTop={20}>
      <Box w="3xl" className="question-container">
        <QuestionCard />;
        <Progress value={10} />
      </Box>
    </Flex>
  );
};

export default QuestionsPage;
