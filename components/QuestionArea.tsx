import {
  Input,
  Flex,
  Text,
  Center,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

const QuestionArea: FunctionComponent<{
  instruction: string;
  content: string;
}> = ({ instruction, content }) => {
  return (
    <FormControl id="email">
      <Text fontSize="xl">{instruction}</Text>
      <Center marginY={10} w={"70%"}>
        <Text as="cite" lineHeight={10} marginLeft={10} fontSize="xl" aria-multiline >
          {content.split("\n").map((text, i) => <p key={i}>{text}</p>)}
        </Text>
      </Center>
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

export default QuestionArea;