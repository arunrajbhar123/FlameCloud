import {
  ModalFooter,
  Button,
  ModalBody,
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Select } from "chakra-react-select";
import dbMembers from "../db.json";
export function BasicUsage({ isOpen, onClose, data }) {
  const [show, setShow] = useState({});
  const dsa = [{ label: "Arun" }];

  return (
    <>
      <Modal w="100%" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.100">
          <ModalHeader>SOP Access</ModalHeader>

          <ModalBody>
            {data?.map((el, index) => (
              <Box key={index}>
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
                  <Select
                    isMulti
                    // value={dsa}
                    options={dbMembers.members}
                    placeholder="Select Members"
                    closeMenuOnSelect={false}
                    outline="none"
                    border="none"
                    size="md"
                    variant="unstyled"
                    // leftIcon={
                    //   <SmallAddIcon bg="gray" color="#fff" rounded="2" />
                    // }
                  />
                </Box>
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
