import {
    HStack,
    useColorMode,
    Link as ChakraLink,
    Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

// my components
import HeaderIcon, { HeaderIconProps } from "./HeaderIcon";
import { getColors } from "../constants/Color";

import { getButtonInfos, LinkInfos } from "../constants/HeaderInfos";
const HeaderPC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const Colors = getColors(colorMode);

    const location = useLocation();

    const pathname = location.pathname;

    // const buttonInfos = getHeaderInfos("buttonInfos");
    const buttonInfos: HeaderIconProps[] = getButtonInfos(
        colorMode,
        toggleColorMode
    );

    return (
        <>
            <HStack gap={5} pr={10}>
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
                                linkinfo.to === pathname ? "2px solid" : "none",
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
                        <Text fontSize={"xl"} fontWeight={"semibold"}>
                            {linkinfo.linkName}
                        </Text>
                    </ChakraLink>
                ))}
            </HStack>

            {buttonInfos.map((buttonInfo, index) => (
                <HeaderIcon
                    key={index}
                    ariaLabel={buttonInfo.ariaLabel}
                    icon={buttonInfo.icon}
                    onClick={buttonInfo.onClick}
                    pr={buttonInfo.pr}
                />
            ))}
        </>
    );
};

export default HeaderPC;
