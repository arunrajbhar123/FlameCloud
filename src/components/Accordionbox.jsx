import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { DragHandleIcon, SmallAddIcon } from "@chakra-ui/icons";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useState } from "react";
const Accordionbox = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton rounded={5}>
            <Box flex="1" px="2">
              <Flex gap={2} alignItems="center">
                <DragHandleIcon fontSize="12" />
                <Text>{data?.name}</Text>
              </Flex>
            </Box>

            <Menu>
              <MenuButton
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{
                  bg: "transparent",
                  transform: "scale(0.98)",
                }}
                as={Button}
                rightIcon={<HiEllipsisVertical />}
              ></MenuButton>
              <MenuList>
                <MenuItem>Edit Category</MenuItem>
                <MenuItem>Manage Access</MenuItem>
                <MenuItem colorScheme="red">Delete</MenuItem>
              </MenuList>
            </Menu>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          {data.plans?.map((el) => (
            <Accordion allowMultiple position="relative">
              <AccordionItem>
                <Box position="absolute" top="2" left="-2">
                  <SmallAddIcon />
                </Box>
                <AccordionButton>
                  <Flex
                    alignItems="center"
                    gap={5}
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Flex alignItems="center" gap={5}>
                      <DragHandleIcon fontSize="12" />
                      <Text>{el.plan}</Text>
                    </Flex>
                    <AccordionIcon />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  {el.pointer?.map((val, index) => (
                    <Box position="relative" key={index}>
                      <Box
                        position="absolute"
                        bg="pink"
                        w="1px"
                        h={el.pointer?.length - 1 === index ? "2rem" : "3rem"}
                        left="-3"
                        top="-3"
                      ></Box>
                      <Box bg="red" mb="2" p="2" rounded="5">
                        <Box
                          bg="pink"
                          w="12px"
                          position="absolute"
                          h="1px"
                          top="5"
                          left="-3"
                        ></Box>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Flex alignItems="center" gap={2}>
                            <DragHandleIcon fontSize="12" />
                            <Text>{val.text}</Text>
                          </Flex>

                          <Menu>
                            <MenuButton
                              bg="transparent"
                              _hover={{ bg: "transparent" }}
                              _active={{
                                bg: "transparent",
                                transform: "scale(0.98)",
                              }}
                              as={Button}
                              rightIcon={<HiEllipsisVertical />}
                            ></MenuButton>
                            <MenuList>
                              <MenuItem>Edit Category</MenuItem>
                              <MenuItem>Manage Access</MenuItem>
                              <MenuItem colorScheme="red">Delete</MenuItem>
                            </MenuList>
                          </Menu>
                        </Flex>
                      </Box>
                    </Box>
                  ))}

                  <Flex gap="5">
                    <Button
                      leftIcon={<SmallAddIcon />}
                      onClick={() => data.data.pointer}
                    >
                      Add Pointer
                    </Button>
                    <Button leftIcon={<SmallAddIcon />}>On Hover</Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default Accordionbox;
