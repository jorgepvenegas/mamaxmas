import {
  Flex,
  Text,
  Center,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";
import { FunctionComponent, useContext, useState } from "react";
import AppContext from "../context/app";

const QuestionArea: FunctionComponent<{
  instruction: string;
  content: string;
  answer: string;
  isFinalStep: boolean
}> = ({ instruction, content, answer, isFinalStep }) => {

  const { activeId, setActiveId } = useContext(AppContext);
  const [guess, setGuess] = useState("");

  const validateGuess = () => {

    if (isFinalStep) { // duplicated
      console.log("redirect to /frames")
    }

    if (answer.toLowerCase().trim() === guess.toLowerCase().trim()) {
      setActiveId(activeId + 1);
    }
    else {
      console.log("Try again")
    }
  }

  return (
    <FormControl id="email">
      <Text fontSize="xl">{instruction}</Text>
      <Center marginY={10} w={"70%"}>
        <Text as="cite" lineHeight={10} marginLeft={10} fontSize="xl" aria-multiline >
          {content.split("\n").map((text, i) => <p key={i}>{text}</p>)}
        </Text>
      </Center>
      <Flex flexDirection="column">
        <Input type="text" placeholder={"Type your answer"} value={guess} onChange={(e) => setGuess(e.currentTarget.value)} />
        <Button type="submit" mt={2} colorScheme="green" size={"md"} onClick={() => validateGuess()}>
          {isFinalStep ? "Go to final step!" : "Submit Answer"}
        </Button>
      </Flex>
    </FormControl>
  );
};

export default QuestionArea;