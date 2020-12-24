import { Flex, Text, Box, Image, Button } from "@chakra-ui/react";
import { FunctionComponent, useContext } from "react";
import AppContext from "../context/app";
import { useRouter } from "next/router";

const MessageArea: FunctionComponent<{
  instruction: string;
  imgUrl: string;
  isFinalStep: boolean;
}> = ({ instruction, imgUrl, isFinalStep }) => {
  const { activeId, setActiveId } = useContext(AppContext);
  const router = useRouter();

  const goToNextStep = () => {
    if (isFinalStep) {
      // Duplicated code
      router.push("/photos");
    } else {
      setActiveId(activeId + 1);
    }
  };
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
      <Flex flexDirection="column">
        <Button
          type="submit"
          mt={2}
          colorScheme="green"
          size={"md"}
          onClick={() => goToNextStep()}>
          {isFinalStep ? "Go to final step!" : "Continue"}
        </Button>
      </Flex>
    </>
  );
};

export default MessageArea;
