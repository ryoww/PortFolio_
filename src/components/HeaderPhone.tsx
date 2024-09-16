import {
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    useColorMode,
    useDisclosure,
    VStack,
    Text,
    Link as ChakraLink,
    DrawerBody,
    HStack,
    DrawerFooter,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation, Link as RouterLink } from "react-router-dom";

import HeaderIcon, { HeaderIconProps } from "./HeaderIcon";
import { getButtonInfos, LinkInfos } from "../constants/HeaderInfos";
import { getColors } from "../constants/Color";

const HeaderPhone = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const Colors = getColors(colorMode);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const location = useLocation();

    const pathname = location.pathname;

    const buttonInfos: HeaderIconProps[] = getButtonInfos(
        colorMode,
        toggleColorMode
    );

    return (
        <>
            <IconButton
                variant={"outline"}
                aria-label="HamburgerIcon"
                icon={<HamburgerIcon />}
                size={"md"}
                onClick={onOpen}
                colorScheme="black"
            ></IconButton>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size={"xs"}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />

                        <DrawerBody>
                            <VStack
                                justifyContent={"center"}
                                gap={5}
                                pt={10}
                                h={"80vh"}
                            >
                                {" "}
                                {LinkInfos.map((linkinfo, index) => (
                                    <ChakraLink
                                        as={RouterLink}
                                        to={linkinfo.to}
                                        key={index}
                                        sx={{
                                            color:
                                                linkinfo.to === pathname
                                                    ? Colors.accent
                                                    : undefined,
                                            borderBottom:
                                                linkinfo.to === pathname
                                                    ? "2px solid"
                                                    : "none",
                                            borderColor:
                                                linkinfo.to === pathname
                                                    ? Colors.accent
                                                    : "transparent",
                                            transition: "all 0.3s ease",
                                            _hover: {
                                                color: Colors.accent,
                                            },
                                        }}
                                    >
                                        <Text
                                            fontSize={"2xl"}
                                            fontWeight={"semibold"}
                                        >
                                            {linkinfo.linkName}
                                        </Text>
                                    </ChakraLink>
                                ))}
                            </VStack>
                        </DrawerBody>

                        <DrawerFooter>
                            <HStack>
                                {buttonInfos.map((buttonInfo, index) => (
                                    <HeaderIcon
                                        key={index}
                                        ariaLabel={buttonInfo.ariaLabel}
                                        icon={buttonInfo.icon}
                                        onClick={buttonInfo.onClick}
                                        pr={buttonInfo.pr}
                                    />
                                ))}
                            </HStack>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

export default HeaderPhone;
