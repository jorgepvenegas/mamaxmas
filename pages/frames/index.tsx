import { NextPage } from "next";
import { useState, useContext, useEffect } from "react";
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Grid,
  Image,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  ModalContent,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import AppContext from "../../context/app";

// type Photo = {
//   id: number;
//   isSelected: boolean;
// };

const getFrameList = () => {
  // Hardode a frame list
  return [1, 2, 3, 4, 5, 6, 7, 8].map(num => {
    return {
      id: num,
      selected: false,
    };
  });
};

const FramePage: NextPage = () => {
  const SELECTION_LIMIT = 1;
  const [frame, setFrame] = useState(null);
  const [totalSelected, setTotalSelected] = useState(0);
  const [frames, updateFrames] = useState(getFrameList());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setSelectedFrame } = useContext(AppContext);
  const { isLoggedIn } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    console.log("Frames isLoggedIn", isLoggedIn);
    if (!isLoggedIn) {
      router.push("/");
    }
  }, []);

  const handleFrameSelection = (num: number) => {
    const updatedList = frames.map(p => {
      if (p.id === num) {
        p.selected = !p.selected;
        if (p.selected) {
          setTotalSelected(totalSelected + 1);
          setFrame(p.id);
        } else {
          setFrame(null);
          setTotalSelected(totalSelected - 1);
        }
      }
      return p;
    });
    updateFrames(updatedList);
  };

  const continueToNextStep = () => {
    setSelectedFrame(frame);
    router.push("/congratulations");
  };

  return (
    <Flex flexDirection="column" alignItems="center" marginTop={20}>
      <Box
        w="90%"
        // maxWidth={1024}
        minHeight={700}
        padding={7}
        borderRadius={10}
        bg="white"
        align="center"
        marginBottom={10}>
        <Heading as="h2">Now let's get a frame for your photos</Heading>
        {/* <Heading as="h4" size="md">
          You have {SELECTION_LIMIT - totalSelected} photos left!
        </Heading> */}
        <Grid templateColumns="repeat(4, 2fr)" gap={6}>
          {frames.map(({ id, selected }, key) => (
            <Box
              key={key}
              w="100%"
              padding={5}
              marginBottom={5}
              bg={selected ? "gray.200" : "gray.100"}
              rounded={10}>
              <Image
                boxSize="100%"
                boxSizing="content-box"
                cursor="pointer"
                objectFit="scale-down"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/assets/frames/${id}.jpeg`}
                onClick={() => {
                  setFrame(id);
                  onOpen();
                }}
              />
              <Box paddingY={7}>
                <Checkbox
                  isChecked={selected}
                  isDisabled={!selected && totalSelected === SELECTION_LIMIT}
                  onChange={() => {
                    handleFrameSelection(id);
                  }}>
                  Select
                </Checkbox>
              </Box>
            </Box>
          ))}
        </Grid>
        <Flex flexDirection="column">
          <Button
            mt={8}
            colorScheme="red"
            disabled={totalSelected === 0}
            onClick={() => continueToNextStep()}>
            {totalSelected === 0
              ? "Select your frame"
              : `That's beautiful! You're all set!`}
          </Button>
        </Flex>
      </Box>

      <Modal
        isOpen={isOpen}
        isCentered={true}
        onClose={() => {
          setFrame(null);
          onClose();
        }}>
        <ModalOverlay />
        <ModalContent maxW="50rem">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image
                src={`${process.env.NEXT_PUBLIC_ASSETS}/assets/frames/${frame}.jpeg`}></Image>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                setFrame(null);
                onClose();
              }}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default FramePage;
