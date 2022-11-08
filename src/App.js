import "./App.css";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";
import { SmallAddIcon } from "@chakra-ui/icons";
import Accordionbox from "./components/Accordionbox";
import data from "./db.json";
import { BasicUsage } from "./components/BasicUsage";
import { useDisclosure } from "@chakra-ui/react";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={16}>
      <Text>SOP</Text>
      <Flex justifyContent="space-between">
        <Text fontSize={"2xl"} fontWeight="bolder">
          Action Plans
        </Text>
        <Flex gap={3}>
          <Button
            leftIcon={<FaUserFriends />}
            colorScheme="blue"
            variant="outline"
            onClick={onOpen}
          >
            Manage Access
          </Button>
          <Button
            leftIcon={<SmallAddIcon bg="blue.400" rounded={2} />}
            colorScheme="blue"
          >
            New Plan
          </Button>
        </Flex>
      </Flex>
      {data?.data?.map((el) => (
        <Accordionbox data={el} />
      ))}
      <BasicUsage onClose={onClose} isOpen={isOpen}
      data={data.data}
      />
    </Box>
  );
}

export default App;
