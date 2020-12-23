import {
  Box,
  Heading
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { QuestionType } from "../lib/types";

import MessageArea from "../components/MessageArea";
import QuestionArea from "../components/QuestionArea";

const QuestionCard: FunctionComponent<QuestionType> = ({
  header,
  type,
  instruction,
  content,
  imgUrl,
}) => {
  return (
    <Box
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
    </Box>
  );
};

export default QuestionCard;