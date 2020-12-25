import { NextPage } from "next";
import { useState, useContext } from "react";

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
  Alert,
  AlertIcon,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import AppContext from "../../context/app";
// type Photo = {
//   id: number;
//   isSelected: boolean;
// };

const getPhotoList = () => {
  // Hardode a photo list
  return [1, 2, 3, 4, 5, 6, 7, 8].map(num => {
    return {
      id: num,
      selected: false,
    };
  });
};

const FramePage: NextPage = () => {
  const SELECTION_LIMIT = 4;
  const { setSelectedPhotos } = useContext(AppContext);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [totalSelected, setTotalSelected] = useState(0);
  const [photos, updatePhotos] = useState(getPhotoList());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handlePhotoSelection = (num: number) => {
    const updatedList = photos.map(p => {
      if (p.id === num) {
        p.selected = !p.selected;
        p.selected
          ? setTotalSelected(totalSelected + 1)
          : setTotalSelected(totalSelected - 1);
      }
      return p;
    });
    updatePhotos(updatedList);
  };

  const continueToNextStep = () => {
    const selectedPhotos = photos.filter(p => p.selected);
    setSelectedPhotos(selectedPhotos);
    router.push("/frames");
  };
  return (
    <Flex flexDirection="column" alignItems="center" marginTop={20}>
      <Box
        w="90%"
        maxWidth={1024}
        minHeight={700}
        padding={7}
        borderRadius={10}
        bg="white"
        align="center"
        marginBottom={10}>
        <Heading as="h2">Photo picking!</Heading>
        <Alert status="info" rounded={10} marginY={5}>
          <AlertIcon /> You have {SELECTION_LIMIT - totalSelected} photos left!
        </Alert>
        {/* <Heading as="h4" size="md">
          
        </Heading> */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {photos.map(({ id, selected }, key) => (
            <Box
              key={key}
              w="100%"
              padding={5}
              marginBottom={5}
              bg={selected ? "red.200" : "gray.200"}
              rounded={10}>
              <Image
                boxSize="100%"
                cursor="pointer"
                objectFit="cover"
                src={`${process.env.NEXT_PUBLIC_ASSETS}/assets/photos/photo-${id}.jpg`}
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
            mt={4}
            colorScheme="red"
            disabled={totalSelected === 0}
            onClick={() => continueToNextStep()}>
            {totalSelected === 0
              ? "Select your photos"
              : `Great! Let's find a frame`}
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
                src={`${process.env.NEXT_PUBLIC_ASSETS}/assets/photos/photo-${modalPhoto}.jpg`}></Image>
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
