import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import { HiEllipsisVertical } from "react-icons/hi2";

const Accordionbox = ({ data }) => {
  console.log("ds");
  return (
    <Accordion py={5}>
      <AccordionItem>
        <h2>
          <AccordionButton rounded={5}>
            <Box flex="1" px="2">
              <Flex gap={2} alignItems="center">
                <DragHandleIcon fontSize="12" />
                <Text>{data?.name}</Text>
              </Flex>
            </Box>
            <HiEllipsisVertical />
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}
        
        >dsd</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default Accordionbox;
