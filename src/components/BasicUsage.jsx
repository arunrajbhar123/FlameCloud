import {
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Box,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import { useState } from "react";

export function BasicUsage({ isOpen, onClose, data }) {
  const [show, setShow] = useState({});

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.100">
          <ModalHeader>Modal Title</ModalHeader>

          <ModalBody>
            {data?.map((el, index) => (
              <Box>
                <Text
                  mb="2"
                  fontSize={"xl"}
                  color="blue.500"
                  fontWeight="bolder"
                >
                  {el.name}
                </Text>
                <Box bg="#fff" rounded="5" p="2" onClick={() => setShow(!show)}>
                  <Text fontSize="10">TEAMMATES</Text>

                  <Flex justifyContent="space-between">
                    <Text>Select Members</Text>
                    <SmallAddIcon bg="gray" color="#fff" rounded="2" />
                  </Flex>
                </Box>
                {show ? <Box>asdfg</Box> : null}
              </Box>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
