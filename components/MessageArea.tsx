import {
  Flex,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

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

export default MessageArea;