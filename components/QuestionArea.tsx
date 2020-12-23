import {
  Flex,
  Text,
  Center,
  FormControl
} from "@chakra-ui/react";
import QuestionForm from "../components/QuestionForm";
import { FunctionComponent, useContext } from "react";
import AppContext from "../context/app";

const QuestionArea: FunctionComponent<{
  instruction: string;
  content: string;
  answer: string;
  isFinalStep: boolean
}> = ({ instruction, content, answer, isFinalStep }) => {

  const { activeId, setActiveId } = useContext(AppContext);

  return (
    <FormControl id="email">
      <Text fontSize="xl">{instruction}</Text>
      <Center marginY={10} w={"70%"}>
        <Text as="cite" lineHeight={10} marginLeft={10} fontSize="xl" aria-multiline >
          {content.split("\n").map((text, i) => <p key={i}>{text}</p>)}
        </Text>
      </Center>
      <Flex flexDirection="column">
        <QuestionForm
          onSuccess={() => {
            setActiveId(activeId + 1);
          }}
          color="green"
          questionName={`question-${activeId}`}
          answer={answer}
          errorMessage={"Nope"}
          buttonText={isFinalStep ? "Go to final step!" : "Submit Answer"}
        />
      </Flex>
    </FormControl>
  );
};

export default QuestionArea;