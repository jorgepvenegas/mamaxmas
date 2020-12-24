import { NextPage } from "next";
import { useState } from "react";
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
  const [modalPhoto, setModalPhoto] = useState(null);
  const [totalSelected, setTotalSelected] = useState(0);
  const [frames, updateFrames] = useState(getFrameList());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handlePhotoSelection = (num: number) => {
    const updatedList = frames.map(p => {
      if (p.id === num) {
        p.selected = !p.selected;
        p.selected
          ? setTotalSelected(totalSelected + 1)
          : setTotalSelected(totalSelected - 1);
      }
      return p;
    });
    updateFrames(updatedList);
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
        <Heading as="h2">Now let's get a frame</Heading>
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
                  setModalPhoto(id);
                  onOpen();
                }}
              />
              <Box paddingY={7}>
                <Checkbox
                  isChecked={selected}
                  isDisabled={!selected && totalSelected === SELECTION_LIMIT}
                  onChange={() => {
                    handlePhotoSelection(id);
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
            onClick={() => {
              router.push("/congratulations");
            }}>
            {totalSelected === 0 ? "Select your frame" : `All set!`}
          </Button>
        </Flex>
      </Box>

      <Modal
        isOpen={isOpen}
        isCentered={true}
        onClose={() => {
          setModalPhoto(null);
          onClose();
        }}>
        <ModalOverlay />
        <ModalContent maxW="50rem">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image
                src={`${process.env.NEXT_PUBLIC_ASSETS}/assets/frames/${modalPhoto}.jpeg`}></Image>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                setModalPhoto(null);
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
