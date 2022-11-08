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
const Delete = ({ isOpen, onClose, title, index }) => {
  return (
    <Modal w="100%" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.100">
        <ModalHeader>{title}</ModalHeader>

        <ModalBody>
          <Text>
            Are you sure you want to delete this learning, this step can not be
            undone
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="outline" colorScheme="red">
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default Delete;
